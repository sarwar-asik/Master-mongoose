// import express from "express";
import "colors";
import mongoose from "mongoose";
import app from "./app";
// import cors from "cors";

// const mongoose = require("mongoose");
// const app = express();
const port = 5000;
const url: string = "mongodb://localhost:27017";

async function main() {
  try {
    await mongoose.connect(url, {
      dbName: "mongoose-master",
    });
    console.log("SuccessFully connect mongodb".green.bold);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`.green.underline.bold);
    });
  } catch (ConnectError) {
    console.log("failed to connect db", ConnectError);
  }
}

main();

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
