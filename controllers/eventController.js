import { StatusCodes } from "http-status-codes";
import Event from "../models/EventModel.js"
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

/* // CREATE EVENT
export const createEvent = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({ event });
}; */

export const createEvent = async (req, res) => {
    try {
      const { eventTitle, eventDescription, eventStatus, registrationURL, eventType, eventDate } = req.body;
      let eventImgUrl = "";
      let eventImgPublicId = "";
  
      // If image is uploaded, handle the image upload
      if (req.file) {
        // Format the image before uploading
        const file = formatImage(req.file);
  
        // Upload to Cloudinary
        const response = await cloudinary.v2.uploader.upload(file, {
          folder: "events", // Set folder in Cloudinary for image storage
          resource_type: "image", // Ensure the file is treated as an image
        });
  
        // Store the image URL and Public ID
        eventImgUrl = response.secure_url; // Cloudinary image URL
        eventImgPublicId = response.public_id; // Cloudinary public ID (for later deletion if needed)
      }
  
      // Create the new event with or without image
      const newEvent = new Event({
        eventTitle,
        eventDescription,
        registrationURL,
        eventStatus,
        eventType,
        eventDate,
        eventImg: eventImgUrl, // Store the image URL
        eventImgId: eventImgPublicId, // Store the image public ID
        createdBy: req.user.userId, // Assuming you're storing user info in the request
      });
  
      // Save the event to the database
      await newEvent.save();
  
      // Return the created event as a response
      res.status(StatusCodes.CREATED).json({ event: newEvent });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error creating event." });
    }
  };


// GET ALL EVENTS
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
    const event = await Event.findById(req.params.id);
    res.status(StatusCodes.OK).json({ event });
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

// UPDATE EVENT
export const updateEvent = async (req, res) => {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(StatusCodes.OK).json({ msg: "Event updated.", event: updatedEvent });
};

// DELETE EVENT
export const deleteEvent = async (req, res) => {
    const removedEvent = await Event.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: "Event deleted.", event: removedEvent });
};