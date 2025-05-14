import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API WORKING"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

startServer();
