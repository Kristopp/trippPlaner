const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//required: true we validate data
//Before we insert
const formSchema = new Schema(
  {
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    Latitude: { type: Number, required: true },
    Longitude: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    details: { type: String, required: true },
    whoPays: { type: String, required: true },
    pictures: { type: String, required: true },
    expense: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
