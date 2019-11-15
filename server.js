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
// Add item routes
app.use('/api/items', itemsRouter);
app.use('/api/user', userRouter);
app.use('/api/apartment', apartmentRouter);

//Use static index.html page for Heroku deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// create port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
