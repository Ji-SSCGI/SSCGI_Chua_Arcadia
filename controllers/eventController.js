import { StatusCodes } from "http-status-codes";
import Event from "../models/EventModel.js"
import mongoose from "mongoose";
import day from "dayjs";

// CREATE RESERVATION
/* export const createEvent = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({ event });
}; */

export const createEvent = async (req, res) => {
    const { title, description, location } = req.body;
    let eventImgUrl = '';
    let eventImgPublicId = '';

    // If a file (image) is uploaded, handle the upload to Cloudinary
    if (req.file) {
        try {
            // Format the image (if any pre-processing needed)
            const formattedImage = formatImage(req.file); // You can implement any image format/resize logic if needed

            // Upload the image to Cloudinary
            const response = await cloudinary.v2.uploader.upload(formattedImage);

            // Save the Cloudinary image URL and public ID
            eventImgUrl = response.secure_url;
            eventImgPublicId = response.public_id;
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                msg: "Error uploading the event image to Cloudinary.",
                error: error.message,
            });
        }
    }

    // Create the event in the database
    const eventData = {
        title,
        description,
        location,
        createdBy: req.user.userId, // Assuming you have a user object attached to the request
        eventImg: eventImgUrl, // Save the image URL
        eventImgPublicId: eventImgPublicId, // Save the image's public ID
    };

    try {
        // Save the event
        const event = await Event.create(eventData);
        return res.status(StatusCodes.CREATED).json({ event });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: "Error creating the event.",
            error: error.message,
        });
    }
};

// GET ALL RESERVATIONS
export const getAllEvents = async (req, res) => {
    const { search, eventStatus, eventType, sort } = req.query;

    // Build the query object based on query parameters
    const queryObject = {};

    // Search logic for event title and event description
    if (search) {
        queryObject.$or = [
            { eventTitle: { $regex: search, $options: "i" } }, // Change to eventTitle
            { eventDescription: { $regex: search, $options: "i" } },
        ];
    }

    // Filter by event status
    if (eventStatus && eventStatus !== "All") {
        queryObject.eventStatus = eventStatus;
    }

    // Filter by event type
    if (eventType && eventType !== "All") {
        queryObject.eventType = eventType;
    }

    // Sorting options
    const sortOptions = {
        Newest: "-createdAt",
        Oldest: "createdAt",
        "A-Z": "eventTitle",  // Change to eventTitle
        "Z-A": "-eventTitle", // Change to eventTitle
    };

    const sortKey = sortOptions[sort] || sortOptions.Newest;

    // Setup Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        // Fetch events with the query, pagination, and sorting
        const events = await Event.find(queryObject)
            .sort(sortKey)
            .skip(skip)
            .limit(limit);

        // Get the total count of events for pagination
        const totalEvents = await Event.countDocuments(queryObject);
        const numOfPages = Math.ceil(totalEvents / limit);

        // Respond with the events data
        res.status(StatusCodes.OK).json({
            totalEvents,
            numOfPages,
            currentPage: page,
            events,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: "Error fetching events.",
        });
    }
};

// GET SINGLE EVENT
export const getEvent = async (req, res) => {
    try {
        // Log the requested event ID for debugging
        console.log("Requested Event ID:", req.params.id);

        // Fetch the event by ID from the database
        const event = await Event.findById(req.params.id);

        // If the event doesn't exist, return a 404 error with a helpful message
        if (!event) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Event not found with ID: ${req.params.id}` });
        }

        // If the event is found, send it in the response with a 200 status
        console.log("Fetched Event:", event);  // Optional: Log the event for debugging
        res.status(StatusCodes.OK).json({ event });
    } catch (error) {
        // Catch any errors (e.g., invalid ID format, database errors) and return a 500 error
        console.error("Error fetching event:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error fetching event" });
    }
};

export const showStats = async (req, res) => {
    let stats = await Event.aggregate([
        { $match: { createdBy: req.user.userId } },
        { $group: { _id: "$eventStatus", count: { $sum: 1 } } }
    ]);

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc;
    }, {});

    const defaultStats = {
        Upcoming: stats.Upcoming || 0,
        Ongoing: stats.Ongoing || 0,
        Completed: stats.Completed || 0,
        Cancelled: stats.Cancelled || 0,
    };

    let monthlyApplications = await Event.aggregate([
        { $match: { createdBy: req.user.userId } },
        {
            $group: {
                _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                count: { $sum: 1 },
            },
        },
        { $sort: { "_id.year": -1, "_id.month": -1 } },
        { $limit: 6 },
    ]);
    monthlyApplications = monthlyApplications
        .map((item) => {
            const {
                _id: { year, month },
                count,
            } = item;

            const date = day()
                .month(month - 1)
                .year(year)
                .format("MMM YY");
            return { date, count };
        })
        .reverse();

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};