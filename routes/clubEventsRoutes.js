import express from "express";
import { addEvent, getAllEvents } from "../controllers/club/clubEvents/events.js";
import { getEventsbyEvnetName } from './../controllers/club/clubEvents/events';

const router = express.Router();

router.post("/:_id/add-event", addEvent);
router.get("/:_id/events",getAllEvents)
router.get("/:_id/event/:name",getEventsbyEvnetName)

export default router;
