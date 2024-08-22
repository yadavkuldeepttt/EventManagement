import mongoose from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  useremail: { type: String, unique: true },
  userpassword: { type: String, required: true },
});

authSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("userpassword")) return next();
  const hash = await bcrypt.hash(user.userpassword, 10);
  user.userpassword = hash;
  next();
});

const Auth = mongoose.model("Auth", authSchema);
export default Auth;
