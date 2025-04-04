import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtil.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

// REGISTER
export const register = async (req, res) => {

    // Password Hashing
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "Successfully Registered." });
};

// LOGIN
export const login = async (req, res) => {
    // Check Email
    const user = await User.findOne({ email: req.body.email });
    const isValidUser = user && await comparePassword(
        req.body.password,
        user.password
    );

    if (!isValidUser) throw new UnauthenticatedError("Invalid credentials.");

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
        sameSite: 'Lax', // Lax should work for same-origin requests
    });

    res.status(StatusCodes.OK).json({ msg: "Successfully Login." })
};

export const logout = (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: "Successfully logged out!" });
};