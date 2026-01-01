require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));