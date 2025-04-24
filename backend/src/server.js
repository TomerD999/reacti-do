import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is Running 🟢");
});

app.listen(PORT, () => {
  console.log(`Server is up and Running at http://localhost:${PORT}`);
  connectDB();
});
