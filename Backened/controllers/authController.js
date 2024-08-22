import Auth from "../models/authModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const secretKey = crypto.randomBytes(64).toString("hex");

const addAuthentication = async (req, res) => {
  try {
    const { username, useremail, userpassword } = req.body;
    const newAuth = new Auth({
      username,
      useremail,
      userpassword,
    });

    await newAuth.save();
    res.status(201).json({
      message: "Authentication Details added successfully",
    });
  } catch (error) {
    console.error("Error adding authentication details" + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const authenticateUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const foundUser = await Auth.findOne({
      $or: [{ username: usernameOrEmail }, { useremail: usernameOrEmail }],
    });

    if (foundUser) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        foundUser.userpassword
      );
      if (isPasswordMatch) {
        //   generate jwt token
        const token = jwt.sign({ userId: foundUser._id }, secretKey, {
          expiresIn: "1h",
        });
        console.log(token + " token generated");
        res
          .status(200)
          .json({ message: "Login successful", token: token, user: foundUser });
      } else {
        res.status(401).json({ error: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting authentication details" + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { addAuthentication, authenticateUser };
