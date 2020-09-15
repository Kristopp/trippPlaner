"use strict";

var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
}); //Get routes

var usersRouter = require('./routes/users');

var mainFormRouter = require('./routes/form');

app.use('/users', usersRouter);
app.use('/form', mainFormRouter);
app.listen(port, function () {
  console.log("We are running: ".concat(port));
});