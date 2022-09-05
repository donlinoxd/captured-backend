import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI as string;

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MONGODB Successfully connected");
    })
    .catch((error) => {
      console.log(`MONGODB connection error ${error}`);
      process.kill(1);
    });
};

export default connectDB;
