import mongoose from "mongoose";
const Schema = mongoose.Schema


const rateSchema = new mongoose.Schema({


  dollarexchangeRate: {
    type:Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: () => Date.now()
  }
});


export const Rates = new mongoose.model("Dollar", rateSchema);
