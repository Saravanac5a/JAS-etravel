const router = require('express').Router();
let Hotel = require('../models/hotel.model')

router.route('/').get((req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;
