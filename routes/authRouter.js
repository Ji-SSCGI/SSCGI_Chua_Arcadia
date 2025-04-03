import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import upload from "../middleware/multerMiddleware.js";

// IMPORT INPUT VALIDATION
import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';
import { superAdminOnly } from '../middleware/authMiddleware.js';

// IMPORT LIMITER
import rateLimiter from "express-rate-limit";

// LIMITER
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15,
    message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});

const router = Router();

router.route("/register").post(apiLimiter, validateRegisterInput, register);
router.route("/login").post(apiLimiter, validateLoginInput, login);
router.route("/logout").get(logout);

export default router;