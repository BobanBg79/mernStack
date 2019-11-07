const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/api/items');
//establish connection with mongo database
require('./db/mongoose');
// create server instance
const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());
// Add item routes
app.use('/api/items', itemsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// create port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));