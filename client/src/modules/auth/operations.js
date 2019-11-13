import axios from 'axios';
import authActions from './actions';
import { messageOperations } from '../message';

const authenticateUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    console.log('authenticateAttempt', 1);
    if (token) {
      dispatch(authActions.authAttempt());
      console.log('authenticateAttempt', 2);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get('/api/user', config);
      dispatch(authActions.authSuccess(response.data));
    }
  } catch (err) {
    dispatch(authActions.authFail());
  }
};

const registerUser = data => async dispatch => {
  dispatch(authActions.registerAttempt());
  try {
    console.log('operation registerUser');
    const response = await axios.post('api/user/register', data);
    console.log('operation registerUser SUCCESS');
    dispatch(authActions.registerSuccess(response.data));
    dispatch(
      messageOperations.displayMessageAndClear({
        message: 'User successfully created',
        type: 'success',
      })
    );
  } catch (err) {
    dispatch(authActions.registerFail());
    dispatch(messageOperations.displayMessageAndClear(err));
  }
};

export default {
  authenticateUser,
  registerUser,
};
