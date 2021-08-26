import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/eshopper", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log("Server up on Port 5000");
});
