const { spawn } = require("child_process");
const fs = require("fs");
const express = require("express");
const server = express();

// Make sure dist exists
if (!fs.existsSync("dist")) {
    console.log("Dist does not exist to serve from!");
    process.exit(1); // Force quit
}
// Serve directly from the dist folder
server.use(express.static("dist"));

server.listen(8080, () => console.log("Online!"));