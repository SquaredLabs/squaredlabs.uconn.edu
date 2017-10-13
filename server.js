const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("."));

app.listen(8080, () => {
    console.log("Ready!");
});