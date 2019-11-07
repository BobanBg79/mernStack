const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.log(err));
