"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

var morgan = require("morgan");

var helmet = require("helmet");

require("dotenv").config();

var app = express();
app.use(morgan("common"));
app.use(helmet()); //only request from this origin can turned back
//react front end

app.use(cors({
  origin: "http://localhost3000"
}));
app.use(express.json());
var port = process.env.PORT || 5000;
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
}); //Get routes

var usersRouter = require("./routes/users");

var mainFormRouter = require("./routes/form");

app.use("/users", usersRouter);
app.use("/form", mainFormRouter);
app.listen(port, function () {
  console.log("We are running: ".concat(port));
});