import express from "express";
import { addCommittee, getCommittee } from "../controllers/clubCommittee/committee.js";

const router = express.Router();

// Use Mongo _id in the URL
router.post("/:_id/add-committee", addCommittee);
// router.get("/:_id/committee", getCommittee);

export default router;
