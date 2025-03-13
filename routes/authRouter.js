import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';

// IMPORT INPUT VALIDATION
import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';

const router = Router();

//router.post('/register', validateRegisterInput, register);
//router.post('/login', validateLogin, login);

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(validateLoginInput, login);
router.route("/logout").get(logout);

export default router;