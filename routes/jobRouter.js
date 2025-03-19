import { Router } from "express";
const router = Router();

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    showStats
} from '../controllers/jobController.js';

// IMPORT INPUT VALIDATAION
import { validateJobInput, validateIdParameters } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/").get(getAllJobs).post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
    .route("/:id")
    .get(validateIdParameters, getJob)
    .patch(checkForTestUser, validateJobInput, validateIdParameters, updateJob)
    .delete(checkForTestUser, validateIdParameters, deleteJob);

export default router;
