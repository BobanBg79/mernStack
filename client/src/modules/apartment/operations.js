import axios from 'axios';
import { apartmentActions } from './index';

const getExistingApartment = id => async dispatch => {
  try {
    const response = await axios.get(`/api/apartments/${id}`);
    dispatch(apartmentActions.getExistingApartment(response.data));
  } catch (err) {
    console.log('GRESKA: ', err.response.data);
  }
};

const createApartment = data => async dispatch => {
  try {
    const response = await axios.post('/api/apartments/create', data);
    dispatch(apartmentActions.createApartmentSuccess(response.data));
  } catch (err) {
    console.log('GRESKA U PRAVLJENJU APART.: ', err.response);
  }
};

const getAllApartments = () => async dispatch => {
  try {
    const response = await axios.get('/api/apartments');
    dispatch(apartmentActions.getAllApartments(response.data));
  } catch (err) {
    console.log('getAllApartments error: ', err.response);
  }
};

export default {
  createApartment,
  getExistingApartment,
  getAllApartments,
};
