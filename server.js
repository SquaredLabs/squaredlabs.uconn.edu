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

server.get("/webhook/push", (req, res) => {
    res.send("Success");
    console.log("Starting push update!");
    let updateProcess = spawn("/bin/sh", ["-c", "git pull && npm run build"]);
    updateProcess.stdout.on("data", (data) => {
        console.log(data.toString());
    });
    updateProcess.on("error", (err) => console.error(err));
    updateProcess.on("exit", (code) => console.log(`Finished updating with code ${code}`));
});

server.listen(8080, () => console.log("Online!"));