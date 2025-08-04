require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 8000;

const allowedOrigins = [
  "https://inotebook-git-main-vaduni-niranjans-projects-32a1dc87.vercel.app",
  "https://inotebook-delta-sable.vercel.app/",
  "https://inotebook-ejsgd3niw-vaduni-niranjans-projects-32a1dc87.vercel.app/",
  "http://localhost:8000"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" iNotebook backend is live!");
});
app.get("/favicon.ico", (req, res) => res.status(204).end());


// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
