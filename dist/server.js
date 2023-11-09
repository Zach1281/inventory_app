const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT | 3000;

const mongoDB = "mongodb://localhost:27017/inventory";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
