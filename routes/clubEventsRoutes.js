import express from "express";
import { addEvent } from "../controllers/club/clubEvents/events.js";

const router = express.Router();

router.post("/:_id/add-event", addEvent);

export default router;
