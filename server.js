// import dependencies
//--------------------------------------------------------
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

// create server
//--------------------------------------------------------
app.use(express.static(path.join(__dirname, "client/build/")));
console.log(PORT);
// start server
//--------------------------------------------------------
app.listen(PORT, () => {
  console.log("listening to PORT: " + PORT);
});
