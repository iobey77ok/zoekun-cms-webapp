require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB connected")
}).catch((err) => {
  console.error("MongoDB connection error:", err)
});

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


/*
API endpoints
*/

// Check status
app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

// Hello World test
app.get("/", (req, res) => {
  console.log(">>> HIT / ROUTE <<<");
  res.send("Hello World!");
});