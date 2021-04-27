require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || process.env.port;
const socketio = require("socket.io");
const io = socketio(server);
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const router = require("./router");
const socketMessaging = require("./messaging");

///
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(router);
////

server.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});

///
///
socketMessaging(io);
