import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Mongo URI exists:", !!process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDB;
