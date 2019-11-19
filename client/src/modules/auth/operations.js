import Http from '../../utils/Http';
import authActions from './actions';
import { messageOperations } from '../message';

const authenticateUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(authActions.authAttempt());
      const response = await Http.get('/api/user/auth');
      dispatch(authActions.authSuccess(response.data));
      dispatch(
        messageOperations.displayMessageAndClear(
          'User successfully authenticated',
          'success'
        )
      );
    }
  } catch (err) {
    dispatch(authActions.authFail());
  }
};

const registerUser = data => async dispatch => {
  dispatch(authActions.registerAttempt());
  try {
    const response = await Http.post('api/user/register', data);
    dispatch(authActions.registerSuccess(response.data));
    dispatch(
      messageOperations.displayMessageAndClear(
        'User successfully created',
        'success'
      )
    );
  } catch (err) {
    dispatch(authActions.registerFail());
    dispatch(
      messageOperations.displayMessageAndClear(err.response.data.error, 'error')
    );
  }
};

const login = data => async dispatch => {
  dispatch(authActions.loginAttempt());
  try {
    const response = await Http.post('/api/user/login', data);
    dispatch(authActions.loginSuccess(response.data));
    dispatch(
      messageOperations.displayMessageAndClear(
        'Successfully logged in',
        'success'
      )
    );
  } catch (err) {
    dispatch(authActions.loginFail());
    dispatch(
      messageOperations.displayMessageAndClear(err.response.data.error, 'error')
    );
  }
};

const logout = () => async dispatch => {
  try {
    await Http.post('/api/user/logout');
    dispatch(authActions.logoutSuccess());
    dispatch(
      messageOperations.displayMessageAndClear(
        'Successfully logged out',
        'success'
      )
    );
  } catch ({ response }) {
    dispatch(
      messageOperations.displayMessageAndClear(response.data.error, 'error')
    );
  }
};

export default {
  authenticateUser,
  registerUser,
  login,
  logout,
};
