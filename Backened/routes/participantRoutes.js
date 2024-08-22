import express from "express";
const router = express.Router();
import saveParticipant  from "../controllers/participantController.js";

router.post('/saveParticipant', saveParticipant);

export default router;
