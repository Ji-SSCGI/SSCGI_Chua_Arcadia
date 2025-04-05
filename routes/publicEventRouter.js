import Router from "express";
const router = Router();

import {
    getAllEvents
} from "../controllers/eventController.js";

router.route("/").get(getAllEvents);

export default router;