import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);