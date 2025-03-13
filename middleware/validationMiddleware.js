import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import mongoose from 'mongoose';
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith("No job")) {
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
        .isEmail().withMessage('Invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError('Email already exists');
            }
        }),
    body("password")
        .notEmpty().withMessage("Password is required.")
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters long'),
    body("lastName").notEmpty().withMessage("Last name is required."),
    body("location").notEmpty().withMessage("Location is required."),
]);

// VALIDATE USER LOGIN INPUT
export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty().withMessage("Email is required.")
        .isEmail().withMessage('Invalid email format'),
    body("password")
        .notEmpty().withMessage("Password is required."),
]);

// VALIDATE JOB INPUT
export const validateJobInput = withValidationErrors([
    body("company").notEmpty().withMessage("Company is required."),
    body("position").notEmpty().withMessage("Position is required."),
    body("jobLocation").notEmpty().withMessage("Job location is required."),
    body("jobStatus")
        .isIn(Object.values(JOB_STATUS))
        .withMessage("Invalid job status."),
    body("jobType")
        .isIn(Object.values(JOB_TYPE))
        .withMessage("Invalid job type."),
]);

// VALIDATE PARAMETERS
export const validateIdParameters = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB Id.');
        const job = await Job.findById(value);
        if (!job) throw new NotFoundError(`No job with Id: ${value}`);

        // Check Role and Ownership
        const isAdmin = req.user.role === "admin";
        const isOwner = req.user.userId === job.createdBy.toString();

        if (!isAdmin || isOwner)
            throw new UnauthorizedError("Unauthorized access to this page.");
    }),
]);
