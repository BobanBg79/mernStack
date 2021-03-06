import types from './types';

const createApartmentSuccess = payload => ({
  type: types.APARTMENT_CREATE_SUCCESS,
  payload,
});
const createApartmentFail = payload => ({
  type: types.APARTMENT_CREATE_SUCCESS,
  payload,
});

const getSingleApartment = payload => ({
  type: types.GET_EXISTING_APARTMENT,
  payload,
});

const getAllApartments = payload => ({
  type: types.GET_ALL_APARTMENTS_SUCCESS,
  payload,
});

const startRequest = () => ({
  type: types.START_APARTMENT_REQUEST,
});

const stopRequest = () => ({
  type: types.STOP_APARTMENT_REQUEST,
});

export default {
  createApartmentSuccess,
  createApartmentFail,
  getSingleApartment,
  getAllApartments,
  startRequest,
  stopRequest,
};
