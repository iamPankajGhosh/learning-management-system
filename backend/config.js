import dotenv from "dotenv";
dotenv.config();

const config = {
  mongoUri: String(process.env.MONGO_URI),
};

export default config;
