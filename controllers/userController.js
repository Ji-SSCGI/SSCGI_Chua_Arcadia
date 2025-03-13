import { StatusCodes } from "http-status-codes";
import User from '../models/UserModel.js';

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    console.log(userWithoutPassword);
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'Application stats.' });
};

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'Update user.' });
};