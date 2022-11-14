const express = require("express");
const app = express();
const router = require("./fruitlist/fruitlist.router");
const bodyparser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyparser.json());

app.use("/fruitlist", router);

module.exports = app;
