const SocketIO = require("socket.io");
const ColorList = require("./calculations/quick-sort-colors");

module.exports = function(server) {
  const io = SocketIO(server);
  let lastUpdate = 0;
  let data = [];
  io.on("connection", function(socket) {
    function updateColors(data) {
      socket.emit("update calculation", { data });
    }

    socket.on("start calculation", req => {
      console.log("start sorting");
      const colors = JSON.parse(req.colors).colors;
      const rgb = new ColorList(0, 250, colors, 50);
      rgb.promiseSort(rgb.colors, updateColors, 0);
      // .then(() => console.log("complete"));
      // rgb
      //   .quickSortCoordinatesLive(null, updateColors)
      //   .then(() => console.log("success!"));
    });
  });
};
