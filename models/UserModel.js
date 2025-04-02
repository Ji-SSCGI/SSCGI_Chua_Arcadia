import mongoose from "mongoose";
import { USER_ROLE } from "../utils/constants.js";

const UserSchema = new mongoose.Schema({
    avatar: String,
    avatarPublicId: String,
    name: String,
    email: String,
    password: String,
    lastName: {
        type: String,
        default: "Lastname",
    },
    location: {
        type: String,
        default: "My City",
    },
    role: {
        type: String,
        enum: Object.values(USER_ROLE),
        default: USER_ROLE.USER,
    },
}, { timestamps: true });

UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);
