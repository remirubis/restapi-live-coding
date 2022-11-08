const express = require('express');
const mongoose = require('mongoose');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

mongoose.connect('mongodb://database/apinode');

server.use(express.urlencoded());
server.use(express.json());

server.get("/", (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Home");
});

server.listen(port, hostname);