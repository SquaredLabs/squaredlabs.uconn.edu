const express = require("express");
const fs = require("fs");
const app = express();

const indexPage = fs.readFileSync("index.html", "utf8");

app.use(express.static("."));
app.listen(80, () => console.log("Ready!"));