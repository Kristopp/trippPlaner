"use strict";

//Not found middleware  usulay u want it to be last middleware to be registerd
var notFound = function notFound(req, res, next) {
  //Creates not found error
  var error = new Error("Not Found - ".concat(req.originalUrl)); //set status code

  res.status(404); //forward things to actual error handler

  next(error);
}; //when next it goes to next middleware
//Importan must have 4 pararmaeters


var errorHandler = function errorHandler(error, req, res, next) {
  var statusCode = res.stastusCode === 200 ? 500 : res.statusCode;
  console.log(statusCode);
  res.status(statusCode);
  res.json({
    message: error.message
  });
}; // is object


module.exports = {
  notFound: notFound,
  errorHandler: errorHandler
};