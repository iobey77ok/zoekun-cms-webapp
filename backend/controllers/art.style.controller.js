const test = (req, res) => {
    console.log(">>> HIT / ROUTE <<<");
    res.send("Hello World!");
};

module.exports = { test };