import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  name: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const seatModel = mongoose.model("seat", seatSchema);

export default seatModel;
