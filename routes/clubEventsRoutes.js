import express from "express";
import { addEvent, getAllEvents } from "../controllers/club/clubEvents/events.js";

const router = express.Router();

router.post("/:_id/add-event", addEvent);
router.get("/:_id/events",getAllEvents)

export default router;
