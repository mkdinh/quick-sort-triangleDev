// import dependencies
//--------------------------------------------------------
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const http = require("http");
const socket = require("./socket");
const server = http.createServer(app);
// create server
//--------------------------------------------------------
app.use(express.static(path.join(__dirname, "./client/build/")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// creeate websocket connection
//--------------------------------------------------------
socket(server);

// start server
//--------------------------------------------------------
server.listen(PORT, () => {
  console.log("listening to PORT: " + PORT);
});
