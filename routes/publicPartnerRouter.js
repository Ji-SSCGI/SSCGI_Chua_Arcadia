import Router from "express";
const router = Router();

import {
    getAllPartners
} from "../controllers/partnerController.js";

router.route("/").get(getAllPartners);

export default router;