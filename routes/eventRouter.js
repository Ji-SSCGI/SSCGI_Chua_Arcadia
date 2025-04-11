import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

import {
    createEvent,
    deleteEvent,
    getAllEvents,
    getEvent,
    updateEvent,
} from '../controllers/eventController.js';

// IMPORT INPUT VALIDATION
import { authorizePermissions, authenticateUser } from "../middleware/authMiddleware.js";
import { validateEventInput, validateIdParameters } from "../middleware/validationMiddleware.js";

// Routes for getting all reservations, creating a new reservation
router.route("/")
    .get(getAllEvents)
    .post(authenticateUser, upload.single("eventImg"),validateEventInput, createEvent);

router
    .route("/:id")
    .get(validateIdParameters, getEvent)
    .delete(authenticateUser, validateIdParameters, deleteEvent)
    .patch(authenticateUser, upload.single("eventImg"), validateIdParameters, updateEvent)
    ;

export default router;                                                                          