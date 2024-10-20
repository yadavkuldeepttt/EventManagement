import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EventContestDB from "./database/eventContestDB.js";
// import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contestantController from "./controllers/contestantController.js";
import contestController from "./controllers/contestController.js";
import participantRoutes from "./routes/participantRoutes.js";
import { OAuth2Client } from 'google-auth-library';

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


// Google OAuth2 client setup
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Replace with your actual Google Client ID

// Route to handle Google login token verification
app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    // Verify the token with Google's OAuth2 API
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // Return the user's information
    res.json({
      message: 'User verified successfully',
      user: {
        id: userid,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      },
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// app.use("/api/users", userRoutes);

const server = app.listen(process.env.PORT || 4747, () => {
  console.log(`Server started on ${process.env.PORT || 4747}`);
});
