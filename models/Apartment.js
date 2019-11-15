const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const apartmentSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;
