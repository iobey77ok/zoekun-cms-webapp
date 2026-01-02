const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    console.log(">>> HIT / ROUTE <<<");
    res.send("Hello World!");
});

module.exports = router;
