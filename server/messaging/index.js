const functions = require("../functions");

////
function socketMessaging(io) {
  io.on("connect", function (socket) {
    console.log(socket.id);
  });
}

////
module.exports = socketMessaging;
