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

apartmentSchema.pre('save', function(next) {
  const apartment = this;
  console.log(90, 'apartment: ', apartment);
  next();
});

apartmentSchema.post('save', function(error, doc, next) {
  console.log(99, error.errors);
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Apartment name needs to be unique'));
  } else if (error.name === 'ValidationError') {
    const errorMessages = [];
    Object.keys(error.errors).forEach(singleError => {
      errorMessages.push(
        error.errors[singleError].message.replace('Path', 'Field')
      );
    });

    next(new Error(errorMessages));
  } else {
    next();
  }
});

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;
