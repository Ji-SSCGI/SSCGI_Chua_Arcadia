import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

import {
    createPartner,
    deletePartner,
    getAllPartners,
    getPartner,
    updatePartner,
} from '../controllers/partnerController.js';

// IMPORT INPUT VALIDATION
import { authorizePermissions, authenticateUser } from "../middleware/authMiddleware.js";
import { validatePartnerInput, validateIdParameters } from "../middleware/validationMiddleware.js";

// 
router.route("/")
    .get(getAllPartners)
    .post(authenticateUser, upload.single("partnerImg"), validatePartnerInput, createPartner);

router
    .route("/:id")
    .get( getPartner)
    .delete(authenticateUser, deletePartner)
    .patch(authenticateUser, upload.single("partnerImg"), updatePartner)
    ;

export default router;                                                                          