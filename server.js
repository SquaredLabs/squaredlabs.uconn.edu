const express = require("express");
const server = express();

server.use(express.static("dist"));
server.listen(8080, () => console.log("Online"));