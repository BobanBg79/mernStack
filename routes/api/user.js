const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//  @route    POST api/user/register
//  @desc     user sign up
//  @access   public
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//  @route    POST api/user/login
//  @desc     user login
//  @access   public
router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//  @route    GET api/user/auth
//  @desc     attempt to authenticate userbased on token
//  @access   protected
router.get('/auth', auth, async (req, res) => {
  res.send(req.user);
});

router.post('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
