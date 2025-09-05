import express from "express";
import {
  addEvent,
  getAllEvents,
  getEventsbyEvnetName,
} from "../controllers/club/clubEvents/events.js";

const router = express.Router();

router.post("/:_id/add-event", addEvent);
router.get("/:_id/events", getAllEvents);
router.get("/:_id/event/:name", getEventsbyEvnetName);

export default router;
