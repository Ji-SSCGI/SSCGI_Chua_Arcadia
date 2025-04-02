import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";
import { EVENT_TYPE, JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

import mongoose from "mongoose";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith("No event")) {
                    throw new NotFoundError(errorMessages);
                }

                if (errorMessages[0].startsWith("Unauthorized access")) {
                    throw new UnauthorizedError("Unauthorized access to this page.");
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

// VALIDATE USER REGISTRATION INPUT
export const validateRegisterInput = withValidationErrors([
    body("name").notEmpty().withMessage("Name is required."),
    body("email")
        .notEmpty().withMessage("Email is required.")
        .isEmail().withMessage("Invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError("Email already exists");
            }
        }),
    body("password")
        .notEmpty().withMessage("Password is required.")
        .isLength({ min: 8 })
        .withMessage("password must be at least 8 characters long"),
    body("lastName").notEmpty().withMessage("Last name is required."),
    body("location").notEmpty().withMessage("Location is required."),
]);

// VALIDATE USER LOGIN INPUT
export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty().withMessage("Email is required.")
        .isEmail().withMessage("Invalid email format"),
    body("password")
        .notEmpty().withMessage("Password is required."),
]);

// VALIDATE UPDATE USER INPUT
export const validateUpdateUserInput = withValidationErrors([
    body("name").notEmpty().withMessage("Name is required."),
    body("email")
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email format.")
        .custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new Error("Email already exists.");
            }
        }),
    body("lastName").notEmpty().withMessage("Last name is required."),
    body("location").notEmpty().withMessage("Location is required."),
]);

// VALIDATE EVENT INPUT
export const validateEventInput = withValidationErrors([
    body("eventTitle")
        .notEmpty()
        .withMessage("Event title is required."),
    body("eventDescription")
        .notEmpty()
        .withMessage("Event description is required."),
    body("eventType")
        .isIn(Object.values(EVENT_TYPE))
        .withMessage("Invalid event type.")  // Validate reservation type
        .notEmpty()
        .withMessage("Event type is required."),
    body("eventDate") // Validate reservation date
        .notEmpty()
        .withMessage("Event date is required."),
]);

// VALIDATE PARAMETERS
export const validateIdParameters = withValidationErrors([
    param("id").custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidMongoId) throw new BadRequestError("Invalid MongoDB Id.");
        const event = await Event.findById(value);
        if (!event) throw new NotFoundError(`No event with Id: ${value}`);

        // Check Role and Ownership
        const isAdmin = req.user.role === "admin";
        const isOwner = req.user.userId === event.createdBy.toString();

        if (!isAdmin || isOwner)
            throw new UnauthorizedError("Unauthorized access to this page.");
    }),
]);