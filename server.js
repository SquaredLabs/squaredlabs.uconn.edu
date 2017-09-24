const express = require("express");
const fs = require("fs");
const pug = require("pug");
const app = express();

app.use(express.static("."));
app.get("/", (req, res) => {
    res.send(pug.renderFile("index.pug"));
});
app.listen(8080, () => {
    console.log("Ready!");
});