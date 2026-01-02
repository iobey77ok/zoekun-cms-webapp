require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");
const artStyleRouter = require('./routes/art.style.routes');

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

// TODO: delete this later
// * Check status
app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

// Hello World test (use routes instead)
app.use('/api/artstyle', artStyleRouter);