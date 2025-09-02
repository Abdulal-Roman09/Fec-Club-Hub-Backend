import express from "express";
import { createClue, getAllClub } from './../controllers/club/club-controllers.js';


const router = express.Router();

router.post("/all-clubs", createClue);
router.get("/all-clubs", getAllClub);

export default router;
