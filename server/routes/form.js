const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/').get((req, res) => {
    //returns promise
  Form.find()
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { 
const id = Number(req.body.id);
const category = req.body.category;
const details = req.body.details;
const whoPays = req.body.whoPays;
const pictures = req.body.pictures;
const expense = req.body.expense;

const newForm = new Form({ 
    id,
    category,
    details,
    whoPays,
    pictures,
    expense
})
newForm.save()
.then(() => res.json('form add!'))
.catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;