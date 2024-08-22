import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EventContestDB from "./database/eventContestDB.js";
// import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contestantController from "./controllers/contestantController.js";
import contestController from "./controllers/contestController.js";
import participantRoutes from "./routes/participantRoutes.js";

dotenv.config();

const app = express();

EventContestDB();
app.use(cors());
app.use(express.json());

// Express endpoint to handle account creation
app.use("/auth", authRoutes);
app.use('/api/participant', participantRoutes);
app.use("/api/contestants", contestantController);
app.use("/api/contest", contestController);
app.use("/uploads/images", express.static("uploads/images"));
app.use("/uploads/contest", express.static("uploads/contest"));

// app.use("/api/users", userRoutes);

const server = app.listen(process.env.PORT || 4747, () => {
  console.log(`Server started on ${process.env.PORT || 4747}`);
});
