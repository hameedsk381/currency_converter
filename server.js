import express from "express";
import { router } from "./routes/convertRoute.js";
import cors from "cors";
import mongoose from "mongoose";
import { purposeRouter } from "./routes/purposeRouter.js";

import { infoRouter } from "./routes/logsRoute.js";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.port || 9000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = path.resolve();
mongoose.connect(
  "mongodb+srv://hameed381:hameed3812@cluster0.l6plzgu.mongodb.net/tayseer",
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

app.use("/currency", router);
app.use("/purpose", purposeRouter);
app.use("/logs", infoRouter);
app.use(express.static(path.join(__dirname, "./currency_converter/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./currency_converter/build/index.html"));
  (err) => {
    res.status(500).send(err);
  };
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
