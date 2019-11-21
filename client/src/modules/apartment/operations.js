import axios from 'axios';
import { apartmentActions } from './index';

const getAllApartments = () => async dispatch => {
  try {
    dispatch(apartmentActions.startRequest());
    const response = await axios.get('/api/apartments');
    dispatch(apartmentActions.stopRequest());
    dispatch(apartmentActions.getAllApartments(response.data));
  } catch (err) {
    dispatch(apartmentActions.stopRequest());
  }
};

const getSingleApartment = id => async dispatch => {
  try {
    const response = await axios.get(`/api/apartments/${id}`);
    dispatch(apartmentActions.getSingleApartment(response.data));
  } catch (err) {
    console.log('GRESKA: ', err.response.data);
  }
};

const createApartment = data => async dispatch => {
  dispatch(apartmentActions.startRequest());
  try {
    const response = await axios.post('/api/apartments/create', data);
    console.log('operation level success: ', response.data);
    dispatch(apartmentActions.stopRequest());
    dispatch(apartmentActions.createApartmentSuccess(response.data));
    return response.data;
  } catch (err) {
    dispatch(apartmentActions.stopRequest());
    console.log('operation level error: ', err.response);
    throw err;
  }
};

export default {
  getAllApartments,
  getSingleApartment,
  createApartment,
};
