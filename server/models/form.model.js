const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
        id: { type: Number, required: true},
        category: { type: String, required: true},
        details: { type: String, required: true},
        whoPays: { type: String, required: true},
        pictures: { type: String, required: true},
        expense: { type: Number, required: true},
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;