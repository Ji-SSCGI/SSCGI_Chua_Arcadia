import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Event from "../models/EventModel.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const getAllUsers = async (req, res) => {
  try {

    const currentUser = await User.findOne({ _id: req.user.userId });

    if (currentUser.role !== "superAdmin") {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ msg: "You are not authorized to view all users." });
    }

    
    const users = await User.find();
    const usersWithoutPasswords = users.map((user) => user.toJSON()); 
    res.status(StatusCodes.OK).json({ users: usersWithoutPasswords });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Error fetching all users" });
  }
};

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const events = await Event.countDocuments();
  res.status(StatusCodes.OK).json({ users, events });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);

    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "Update user." });
};

// GET SINGLE USER
export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(StatusCodes.OK).json({ user });
};

// DELETE USER
export const deleteUser = async (req, res) => {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: "User deleted.", user: removedUser });
};