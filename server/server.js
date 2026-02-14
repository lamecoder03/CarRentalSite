import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

/* -------------------- CORS CONFIG -------------------- */

const allowedOrigin = "https://car-rental-seven-kappa.vercel.app";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

/* -------------------- MIDDLEWARE -------------------- */

app.use(express.json());

/* -------------------- ROUTES -------------------- */

app.get("/", (req, res) => res.send("Server is Running"));

app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

/* -------------------- SERVERLESS HANDLER -------------------- */

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
