import mongoose from "mongoose";

const logSchema = new mongoose.Schema({

  sent_amount: {
    type: Number,
    required: "This field is required.",
  },
  rec_amount:{
    type: Number,
    required: "This field is required.",
  },
  sender_name: {
    type: String,
  },
  receiver_name: {
    type: String,
    required: "This field is required.",
  },
  purpose:{
    type: String,
    required: "This field is required.",
  },
 
  createdAt: {
    type: Date,
    default: () => Date.now()
  }
});

export const Log = mongoose.model("log", logSchema);
