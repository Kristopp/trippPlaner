const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    //returns promise
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post( async (req, res, next) => { 
  try {
const newUser = new User(req.body);
const createNewUser = await newUser.save()
res.json(createNewUser)
} catch (error) {
  if (error.name === 'ValidationError') {
    res.status(422);
  }
  next(error);
}
})

module.exports = router;