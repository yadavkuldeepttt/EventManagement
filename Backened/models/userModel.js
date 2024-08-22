import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:String,
  useremail: {
    type: String,
    unique: true,
  },
  userrole:String,

});

const User = mongoose.model("User", userSchema);
export default User;
