const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("App Listening 3000 port");
});

io.on("connection", (socket) => {
  console.log("User Connected" + socket.id);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });
});
