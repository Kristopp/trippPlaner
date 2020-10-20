const { cloudinary } = require('./util/CloudinaryService');
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const mainFormRouter = require("./routes/form");
const usersRouter = require("./routes/users");
//Import middlewares
const middleware = require("./middlewares");
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

app.use("/allTrips", mainFormRouter);
app.use("/users", usersRouter);
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
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

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:dev_setups')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'dev_setups',
      });
      console.log(uploadResponse);
      res.json({ msg: 'yaya' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
//Get routes
//when some makes request on my server
//no next paramater needed becose it is just a response
app.listen(port, () => {
  console.log(`We are running: ${port}`);
});
