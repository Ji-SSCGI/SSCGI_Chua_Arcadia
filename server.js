// PACKAGE IMPORT
import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from 'mongoose';
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

import cookieParser from 'cookie-parser';

// CUSTOM ROUTER IMPORT 
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import eventRouter from "./routes/eventRouter.js"

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

// Public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// Public Config
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

// Cloudinary Import
import cloudinary from "cloudinary";
// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Check Environment
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
};

// Contet Security Policy

app.use(cookieParser());
app.use(express.json());

app.use(helmet());
app.use(mongoSanitize());


app.get("/", (req, res) => {
    res.send("Hello World");
});

// API
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/events", authenticateUser, eventRouter);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// Not Found Middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: "Not found." })
});

// Error Middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}.`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}