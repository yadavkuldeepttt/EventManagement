import express from "express";
import inviteUser from "../controllers/userController.js";

const router = express.Router();

router.post("/invite-user", inviteUser);

export default router;
