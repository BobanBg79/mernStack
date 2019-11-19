const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Apartment = require('../../models/Apartment');

//  @route    GET api/apartments
//  @desc     get all apartments from db
//  @access   protected
router.get('/', auth, async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.send(apartments);
  } catch (err) {
    res.status(500).send(err);
  }
});

//  @route    GET api/apartments/:id
//  @desc     get single apartment from db
//  @access   protected
router.get('/:id', auth, async (req, res) => {
  console.log('apartment id: ', req.params);
});
//  @route    POST api/apartments/create
//  @desc     create new apartment
//  @access   protected
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
