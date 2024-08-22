import express from "express";
import multer from "multer";
import Contest from "../models/contestModel.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/contest");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// add contest
router.post("/add-contest", upload.single("image"), async (req, res) => {
  try {
    const {
      contestName,
      contestCategory,
      contestAwardPrice,
      deadline,
      createdOn,
      totalParticipants,
      totalSubmissions,
      contestDescription,
    } = req.body;
    const mediaFile = req.file;

    if (!mediaFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const filePath = "/uploads/contest/" + mediaFile.filename;
    const newContest = new Contest({
      contestName,
      contestCategory,
      mediaFile: filePath,
      contestAwardPrice,
      deadline,
      createdOn,
      totalParticipants,
      totalSubmissions,
      contestDescription,
    });

    const savedContest = await newContest.save();
    res.status(201).json({
      message: "Contest created successfully",
      contest: savedContest,
    });
  } catch (error) {
    console.error("Error creating contest: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// get contest
router.get("/get-contest", async (req, res) => {
  try {
    const contest = await Contest.find();

    res.status(200).json(contest);
  } catch (error) {
    console.error("Error Getting Contest: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
