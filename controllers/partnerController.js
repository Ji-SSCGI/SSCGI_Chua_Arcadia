import { StatusCodes } from "http-status-codes";
import Partner from "../models/PartnerModel.js"
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const createPartner = async (req, res) => {
    try {
      const { partnerName, partnerDescription } = req.body;
      let partnerImgUrl = "";
      let partnerImgPublicId = "";
  
      // If image is uploaded, handle the image upload
      if (req.file) {
        // Format the image before uploading
        const file = formatImage(req.file);
  
        // Upload to Cloudinary
        const response = await cloudinary.v2.uploader.upload(file, {
          folder: "partners", // Set folder in Cloudinary for image storage
          resource_type: "image", // Ensure the file is treated as an image
        });
  
        // Store the image URL and Public ID
        partnerImgUrl = response.secure_url; // Cloudinary image URL
        partnerImgPublicId = response.public_id; // Cloudinary public ID (for later deletion if needed)
      }
  
      // Create the new partner with or without image
      const newPartner = new Partner({
        partnerName,
        partnerDescription,
        partnerImg: partnerImgUrl, 
        partnerImgId: partnerImgPublicId, 
        createdBy: req.user.userId,
      });
  
      // Save the event to the database
      console.log(newPartner);
      await newPartner.save();
  
      // Return the created event as a response
      res.status(StatusCodes.CREATED).json({ partner: newPartner });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error creating  partner." });
    }
  };

  // GET ALL PARTNERS
  export const getAllPartners = async (req, res) => {
      const { search, sort } = req.query;
  
      // Build the query object based on query parameters
      const queryObject = {};
  
      // Search logic for event title and event description
      if (search) {
          queryObject.$or = [
              { partnerName: { $regex: search, $options: "i" } }, // Change to eventTitle
              { partnerDescription: { $regex: search, $options: "i" } },
          ];
      }
  
      // Sorting options
      const sortOptions = {
          Newest: "-createdAt",
          Oldest: "createdAt",
          "A-Z": "partnerName",  
          "Z-A": "-partnerName", 
      };
  
      const sortKey = sortOptions[sort] || sortOptions.Newest;
  
      // Setup Pagination
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip = (page - 1) * limit;
  
      try {
          // Fetch events with the query, pagination, and sorting
          const partners = await Partner.find(queryObject)
              .sort(sortKey)
              .skip(skip)
              .limit(limit);
  
          // Get the total count of events for pagination
          const totalPartners = await Partner.countDocuments(queryObject);
          const numOfPages = Math.ceil(totalPartners / limit);
  
          // Respond with the events data
          res.status(StatusCodes.OK).json({
              totalPartners,
              numOfPages,
              currentPage: page,
              partners,
          });
      } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              msg: "Error fetching partners.",
          });
      }
  };

  // GET SINGLE Partner
  export const getPartner = async (req, res) => {
      const partner = await Partner.findById(req.params.id);
      res.status(StatusCodes.OK).json({ partner });
  };

  // UPDATE PARTNER
  export const updatePartner = async (req, res) => {
      const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(StatusCodes.OK).json({ msg: "Partner updated.", partner: updatedPartner });
  };

  // DELETE PARTNER
  export const deletePartner = async (req, res) => {
      const removedPartner = await Partner.findByIdAndDelete(req.params.id);
      res.status(StatusCodes.OK).json({ msg: "Partner deleted.", partner: removedPartner });
  };