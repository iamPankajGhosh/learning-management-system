import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/User.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// db connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// api routes

app.post("/api/user", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.post("/api/user/auth", async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email })
    .then((user) => {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("failed");
      }
    })
    .catch((err) => console.log(err));
});

// start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
