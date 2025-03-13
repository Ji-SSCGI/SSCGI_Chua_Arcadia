import { Router } from "express";
const router = Router();

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} from '../controllers/jobController.js';

// IMPORT INPUT VALIDATAION
import { validateJobInput, validateIdParameters } from "../middleware/validationMiddleware.js";

/*
router.get("/", getAllJobs);
router.get('/api/v1/jobs/:id', getJob);
router.post("/api/v1/jobs", createJob);
router.patch('/api/v1/jobs/:id', updateJob);
router.delete('/api/v1/jobs/:id', deleteJob);
*/

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
    .route("/:id")
    .get(validateIdParameters, getJob)
    .patch(validateJobInput, validateIdParameters, updateJob)
    .delete(validateIdParameters, deleteJob);

export default router;
