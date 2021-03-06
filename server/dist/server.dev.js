"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

var morgan = require("morgan");

var helmet = require("helmet");

var usersRouter = require("./routes/users");

var mainFormRouter = require("./routes/form"); //Import middlewares


var middleware = require('./middlewares');

require("dotenv").config();

var app = express();
app.use(morgan("common"));
app.use(helmet()); //only request from this origin can turned back
//react front end

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
app.use(express.json());
app.use("/users", usersRouter);
app.use("/form", mainFormRouter);
app.use(middleware.notFound);
app.use(middleware.errorHandler);
var port = process.env.PORT || 5000;
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
var connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
}); //Get routes
//when some makes request on my server
//no next paramater needed becose it is just a response

app.get("/", function (req, res) {
  res.json({
    messge: "Hello World! Response"
  });
});
app.listen(port, function () {
  console.log("We are running: ".concat(port));
});