// import dependencies
//--------------------------------------------------------
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

// create server
//--------------------------------------------------------
app.use(express.static(path.join(__dirname, "client/build/")));
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
})

// start server
//--------------------------------------------------------
app.listen(PORT, () => {
  console.log("listening to PORT: " + PORT);
});
