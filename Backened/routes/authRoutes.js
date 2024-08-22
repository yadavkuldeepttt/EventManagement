import express from "express";
import {
  addAuthentication,
  authenticateUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", addAuthentication);
router.post("/authenticate", authenticateUser);
export default router;
