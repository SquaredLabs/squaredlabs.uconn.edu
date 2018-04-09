const { spawn } = require("child_process");
const fs = require("fs");
const express = require("express");
const server = express();
const compression = require('compression');

// Make sure dist exists
if (!fs.existsSync("dist")) {
    console.log("Dist does not exist to serve from!");
    process.exit(1); // Force quit
}
//Compress assets (filter function taken from docs)
server.use(compression({ filter: shouldCompress }))

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
}
// Serve directly from the dist folder
server.use(express.static("dist"));

server.listen(8080, () => console.log("Online!"));