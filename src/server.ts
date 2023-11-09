import express, { Express, Request, Response } from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`[Server]: running at http://localhost:${PORT}`);
});
