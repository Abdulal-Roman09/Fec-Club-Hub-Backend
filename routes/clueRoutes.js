
import  express  from 'express';
import createClue from '../controllers/club/club-controllers.js';

const router=express.Router()
router.post("/all-clubs",createClue)

export default router