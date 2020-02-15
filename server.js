const path = require('path');
const express = require('express');
const itemsRouter = require('./routes/api/items');
const userRouter = require('./routes/api/user');
const apartmentRouter = require('./routes/api/apartment');

//establish connection with mongo database
require('./db/mongoose');
// create server instance
const app = express();
//json parser Middleware
app.use(express.json());
// Add routers
app.use('/api/items', itemsRouter);
app.use('/api/user', userRouter);
app.use('/api/apartments', apartmentRouter);

//Use static index.html page for Heroku deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

<<<<<<< HEAD
app.use((req, res, next) => {
  res.status(404).send('Sorry, this route cannot be found!');
=======
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
>>>>>>> b91dfa92a00fac22af7d66effff5d2b3f71d4e65
});

// create port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
