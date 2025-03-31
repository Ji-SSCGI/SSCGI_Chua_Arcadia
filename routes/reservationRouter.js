import { Router } from "express";
const router = Router();

import {
    createReservation
} from '../controllers/reservationController.js';

// IMPORT INPUT VALIDATAION
import { validateReservationInput, validateIdParameters } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/").post(validateReservationInput, createReservation);

export default router;
