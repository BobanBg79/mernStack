import types from './types';

const createApartmentSuccess = payload => ({
  type: types.APARTMENT_CREATE_SUCCESS,
  payload,
});

export default {
  createApartmentSuccess,
};
