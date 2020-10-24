const router = require("express").Router();
let Form = require("../models/form.model");

router.route("/").get((req, res) => {
  //returns promise
  Form.find()
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post(async (req, res, next) => {
  console.log('mongol')
  try {
    const newForm = new Form(req.body);
    const createFormEntry = await newForm.save();
    res.json(createFormEntry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
