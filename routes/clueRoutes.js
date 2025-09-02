import express from "express";
import { createClue, getAllClub, getSingleClubById } from './../controllers/club/club-controllers.js';


const router = express.Router();

router.post("/all-clubs", createClue);
router.get("/all-clubs", getAllClub);
router.get("/all-clubs/:id", getSingleClubById);

export default router;
