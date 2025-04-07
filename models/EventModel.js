import mongoose from 'mongoose';
import { EVENT_STATUS, EVENT_TYPE } from "../utils/constants.js";

// Event Schema Definition
const EventSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    registrationURL: {
        type: String,
        default: "",
        required: true,
    },
    eventType: {
        type: String,
        enum: Object.values(EVENT_TYPE),
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventStatus: {
        type: String,
        enum: Object.values(EVENT_STATUS),
        default: EVENT_STATUS.UPCOMING, // Default status is 'Upcoming'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the 'User' model
        required: true,
    },
    eventImg: String,
    eventImgPublicId: String
}, { timestamps: true }); // Timestamps for createdAt and updatedAt

// Export the Event model
export default mongoose.model("Event", EventSchema);
