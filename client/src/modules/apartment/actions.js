import types from './types';

const createApartmentSuccess = payload => ({
  type: types.APARTMENT_CREATE_SUCCESS,
  payload,
});

const getExistingApartment = payload => ({
  type: types.GET_EXISTING_APARTMENT,
  payload,
});

const getAllApartments = payload => ({
  type: types.GET_ALL_APARTMENTS,
  payload,
});

export default {
  createApartmentSuccess,
  getExistingApartment,
  getAllApartments,
};
