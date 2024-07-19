import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
// server/config/config.js
export const jwt_SECRET = "your_jwt_secret_here";

import authRoutes from "./routes/authroutes.js";
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middlware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
//api rest
app.get("/", (req, res) => {
  res.send({ messege: `Welcome To Ecommerce-App` });
});
//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`http://localhost:8080 ${PORT}`.bgMagenta);
});
