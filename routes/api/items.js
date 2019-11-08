const express = require('express');
const router = express.Router();
//Item model
const Item = require('../../models/Item');

//  @route    GET api/items
//  @desc     get all items
//  @access   public
router.get('', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//  @route    POST api/items/add
//  @desc     create an item
//  @access   public
router.post('/add', async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

//  @route    DELETE api/items
//  @desc     delete an item
//  @access   public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send({ error: 'item not found' });
    }
    await item.remove();
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
