import mongoose from "mongoose";

const contestantSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mediaFile: {
    type: String,
    required: true,
  },
  contestantName: {
    type: String,
    required: true,
  },
  contestantEmail: {
    type: String,
    required: true,
  },
  contestantLocation: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  votes: {
  type: Number,
  default: 0,
},
});

const Contestant = mongoose.model("Contestant", contestantSchema);
export default Contestant;
