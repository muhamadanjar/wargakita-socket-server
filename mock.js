const express = require("express");
const jsonServer = require("json-server");

const app = express();

app.use("/api", jsonServer.router("./routes/db.json"));

app.listen(4001);
