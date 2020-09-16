const notFound = (req, res, next) => {
  //Creates not found error
  const error = new Error(`Not Found - ${req.originalUrl}`);
  //set status code
  res.status(404);
  //forward things to actual error handler
  next(error);
};

//when next it goes to next middleware
//Importan must have 4 pararmaeters
const errorHandler = (error, req, res, next) => {
  const statusCode = res.stastusCode === 200 ? 500 : res.stastusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    //stack shows terminal error message
    //show only DEV mode
    stack:
      process.env.NODE_ENV === "production" ? "Not production" : error.stack,
  });
};
// is object
module.exports = { 
    notFound,
    errorHandler,
};