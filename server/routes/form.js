const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/').get((req, res) => {
    //returns promise
  Form.find()
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post( async (req, res, next) => { 
  try {
/*     const category = req.body.category;
const details = req.body.details;
const whoPays = req.body.whoPays;
const pictures = req.body.pictures;
const expense = req.body.expense; */
//Create new form body
const newForm = new Form(req.body);
const createFormEntry = await newForm.save()
res.json(createFormEntry)
} catch (error) {
  if (error.name === 'ValidationError') {
    res.status(422);
  }
  next(error);
}
})

/* .then(() => res.json('form add!'))
.catch(err => res.status(400).json('Error ' + err)) */
module.exports = router;