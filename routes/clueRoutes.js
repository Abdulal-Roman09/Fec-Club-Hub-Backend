import express from "express";
import { createClue, deleteClubById, getAllClub, getAllClubBySearch, getSingleClubById, updateClube } from './../controllers/club/club-controllers.js';


const router = express.Router();

router.post("/all-clubs", createClue);
router.get("/all-clubs", getAllClub);
router.get("/all-clubs", getAllClubBySearch);
router.get("/all-club/:id", getSingleClubById);
router.put("/all-club/:id", updateClube);
router.delete("/all-club/:id", deleteClubById);

export default router;
