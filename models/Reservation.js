const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const reservationSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports = Reservation;
