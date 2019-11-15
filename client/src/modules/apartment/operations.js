import axios from 'axios';
import { apartmentActions } from './index';

const createApartment = data => async dispatch => {
  try {
    const response = await axios.post('/api/apartment/create', data);
    dispatch(apartmentActions.createApartmentSuccess(response.data));
  } catch (err) {
    console.log(err.response);
  }
};

export default {
  createApartment,
};
