const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

router.post('/register', async (req, res) => {
  console.log('req.body: ', req.body);

  const user = new User(req.body);
  console.log('user: ', user);
  try {
    await user.save();
    console.log('api save user SUCCESS');
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/auth', auth, (req, res) => {
  res.send(req.user);
});

router.post('/login', async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
