import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("DB CONNECTED");
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI); // Clean and correct
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;
