import express from "express";
const router = express.Router();

import { sendContactForm } from "../controllers/contactController.js";

// Define the POST route for submitting the contact form
router.route("/")
    .post(sendContactForm)

export default router;
