const router = require("express").Router();
let Form = require("../models/form.model");

router.route("/").get((req, res) => {
  Form.find()
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post(async (req, res, next) => {
  console.log("mongol");
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

router.route("/:id").get((req, res) => {
  Form.findById(req.params.id).then((form) => {
    res.json(form).catch((err) => res.status(400).json("is-error:" + err));
  });
});

router.route("/delete/:id").delete((req, res) => {
  Form.findByIdAndDelete(req.params.id)
    .then(() => res.json("Tab deleted."))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Form.findById((form) => {
    form.title = req.body.title;
    form.secureImgUrl = req.body.secureImgUrl;
    form.rating = Number(req.body.rating);
    form.category = req.body.category;
    form.details = req.body.details;
    form.whoPays = req.body.whoPays;
    form.expense = Number(req.body.expense);
    form.title = req.body.title;
    form
      .save()
      .then(() => res.json("Exercise updated!"))
      .catch((err) => res.status(400).json("Error:" + err));
  }).catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
