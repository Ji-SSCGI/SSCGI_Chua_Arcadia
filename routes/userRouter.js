import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

import { getApplicationStats, getCurrentUser, getUser, updateUser, getAllUsers, deleteUser } from "../controllers/userController.js";
import { validateUpdateUserInput, validateUserIdParameters } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/current-user").get(getCurrentUser);
router.route("/").get(getAllUsers);
router.route("/admin/app-stats").get(getApplicationStats);
router.route("/update-user").patch(upload.single("avatar"), validateUpdateUserInput, checkForTestUser, updateUser);

import { authorizePermissions } from '../middleware/authMiddleware.js';

router.get('/admin/app-stats', [
    authorizePermissions('admin'),
    getApplicationStats,
]);


router
    .route("/:id")
    .get(validateUserIdParameters, getUser)
    .patch(updateUser)
    .delete(deleteUser);
    ;

export default router;