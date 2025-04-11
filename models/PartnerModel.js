import mongoose from "mongoose";

// Partner Schema Definition
const PartnerSchema = new mongoose.Schema({
    partnerName: {
        type: String,
        required: true,
    },
    partnerDescription: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    partnerImg: String,
    partnerImgPublicId: String,
}, {timestamps: true});

export default mongoose.model("Partner", PartnerSchema);