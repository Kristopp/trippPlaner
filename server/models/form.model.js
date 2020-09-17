const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//required: true we validate data
//Before we insert
const reqString = {
  type: String,
  required: true,
};
const reqNumber = {
  type: Number,
  required: true,
};

const formSchema = new Schema(
  {
    title: reqString,
    startDate: {
      type: Date,
    },
    Latitude: { 
      ...reqNumber,
      min: -90,
      max: 90,
    },
    Longitude: { 
     ...reqNumber,
      min: -180,
      max: 180,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    category: String,
    details: String,
    whoPays: String,
    pictures: String,
    expense: Number,
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
