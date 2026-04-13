import mongoose from "mongoose";

export async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}
