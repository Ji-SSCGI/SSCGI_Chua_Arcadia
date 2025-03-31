import mongoose from "mongoose";
import { RESERVATION_STATUS, RESERVATION_TYPE, NUMBER_OF_PEOPLE_RANGES } from "../utils/constants.js";

// Schema for Reservation
const ReservationSchema = new mongoose.Schema({
    referenceNumber: {
        type: String,
        unique: true,
        required: true
    },
    clientName: {
        type: String,
        required: true,
    },
    clientEmail: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], // Email validation regex
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'], // Phone validation regex (E.164 format)
    },
    reservationType: {
        type: String,
        enum: Object.values(RESERVATION_TYPE),
        required: true,
        default: RESERVATION_TYPE.SEMINAR,
    },
    reservationDate: {
        type: Date,
        required: true,
    },
    numberOfPeople: {
        type: String,
        enum: Object.values(NUMBER_OF_PEOPLE_RANGES),
        required: true,
        default: NUMBER_OF_PEOPLE_RANGES.RANGE_10_50,
    },
    reservationStatus: {
        type: String,
        enum: Object.values(RESERVATION_STATUS),
        default: RESERVATION_STATUS.PENDING,
    }
}, { timestamps: true }); // Timestamps for createdAt and updatedAt

export default mongoose.model("Reservation", ReservationSchema);
