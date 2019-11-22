const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const apartmentSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    apartment_name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate(value) {
        if (!value) {
          throw new Error('Apartment name cannot be empty');
        }
      },
    },
    capacity: {
      type: Number,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error('Capacity field is required');
        }
      },
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

apartmentSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next();
  }
});

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;
