import express from "express";
import multer from "multer";
import Contestant from "../models/contestantModel.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/add-contestant/:userId",
  upload.single("image"),
  async (req, res) => {
    try {
      const loggedInUserId = req.params.userId;
      console.log(loggedInUserId);
      const {
        contestName,
        title,
        category,
        contestantName,
        contestantEmail,
        contestantLocation,
      } = req.body;
      const mediaFile = req.file;

      if (!mediaFile) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const filePath = "/uploads/images/" + mediaFile.filename;
      const newContestant = new Contestant({
        contestName,
        title,
        category,
        mediaFile: filePath,
        contestantName,
        contestantEmail,
        contestantLocation,
        createdBy: loggedInUserId,
      });

      const savedContestant = await newContestant.save();
      res.status(201).json({
        message: "Contestant created successfully",
        contestant: savedContestant,
      });
    } catch (error) {
      console.error("Error creating contestant: ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/get-contestant", async (req, res) => {
  try {
    const contestants = await Contestant.find();
    res.status(200).json(contestants);
  } catch (error) {
    console.error("Error Getting Contestants: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/vote/:contestantId", async (req, res) => {
  try {
    const contestantId = req.params.contestantId;
    const contestant = await Contestant.findById(contestantId);
    if (!contestant) {
      return res.status(404).json({ error: "Contestant not found" });
    }
    // Increment the votes for the contestant
    contestant.votes += 1;
    await contestant.save();
    res.status(200).json({ message: "Vote added successfully" });
  } catch (error) {
    console.error("Error adding vote: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
