const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })
  //Get routes

/*   const usersRouter = require('./routes/users');
  const formRouter = require('./routes/form'); */
  
  app.use('/routes');
 /*  app.use('/routes'); */
  
app.listen(port, () => { 
    console.log(`We are running: ${port}`);
})

