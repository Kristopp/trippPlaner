const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//required: true we validate data
//Before we insert
const reqString = {
  type: String,
  required: true,
};

const formSchema = new Schema(
  {
    title: reqString,
    imageURL: reqString,
    startDate: {
      type: Date,
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
    expense: Number,
  },
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
