const express = require("express");
const { test } = require("../controllers/art.style.controller");

const router = express.Router();

router.get("/test", test);

module.exports = router;
