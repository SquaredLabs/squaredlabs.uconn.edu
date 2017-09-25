const express = require("express");
const fs = require("fs");
const pug = require("pug");
const app = express();

app.get("/", (req, res) => {
    res.send(pug.renderFile("index.pug"));
});
app.use(express.static("."));

app.listen(8080, () => {
    console.log("Ready!");
});