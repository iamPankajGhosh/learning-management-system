import express from "express";
import mongoose from "mongoose";
import config from "./config";
import authRoutes from "./routes/authRoutes";

const app = express();
dotenv.config();

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/auth", authRoutes);

// start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
