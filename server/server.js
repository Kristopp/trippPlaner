const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");


const usersRouter = require("./routes/users");
const mainFormRouter = require("./routes/form");
//Import middlewares
const middleware = require('./middlewares')
require("dotenv").config();

const app = express();
app.use(morgan("common"));
app.use(helmet());
//only request from this origin can turned back
//react front end
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/users", usersRouter);
app.use("/form", mainFormRouter);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
//Get routes
//when some makes request on my server
//no next paramater needed becose it is just a response
app.get("/", (req, res) => {
  res.json({
    messge: "Hello World! Response",
  });
});


app.listen(port, () => {
  console.log(`We are running: ${port}`);
});
