import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

import {
    createEvent,
    getAllEvents,
    getEvent,
} from '../controllers/eventController.js';

// IMPORT INPUT VALIDATION
import { validateEventInput, validateIdParameters } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

// Routes for getting all reservations, creating a new reservation
router.route("/")
    .get(getAllEvents)
    .post(upload.single("eventImg"),validateEventInput, createEvent);

router
    .route("/:id")
    .get(validateIdParameters, getEvent);

export default router;                                                                          