const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Apartment = require('../../models/Apartment');

router.post('/create', auth, async (req, res) => {
  const apartment = new Apartment({ ...req.body, owner: req.user._id });
  try {
    await apartment.save();
    res.status(201).send(apartment);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
