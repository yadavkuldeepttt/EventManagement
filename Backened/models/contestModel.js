import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
  },
  contestCategory: {
    type: String,
    required: true,
  },
  mediaFile: {
    type: String,
    required: true,
  },
  contestAwardPrice: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
  },
  deadline: {
    type: String,
    required: true,
  },
  totalParticipants: {
    type: Number,
    default: 0,
  },
  totalSubmissions: {
    type: Number,
    default: 0,
  },
  contestDescription: {
    type: String,
  },
});

const Contest = mongoose.model("Contest", contestSchema);
export default Contest;
