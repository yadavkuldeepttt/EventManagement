import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: String,
    transportComingName: String,
transportReturnName: String,
mobile: String,
  pincode: String,
  gender: String,
  age: Number,
startDate: Date,
endDate: Date,
days: Number,
amount: Number,
aadhar: String,
delete: Boolean,
});

const user = mongoose.model('Participant', userSchema);
export default user;