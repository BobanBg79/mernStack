import types from './types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: false,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.AUTH_ATTEMPT:
      return { ...state, loading: true };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        user: payload.user,
        loading: false,
      };
    case types.AUTH_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case types.REGISTER_ATTEMPT:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      console.log('reducer REGISTER_SUCCESS');

      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        user: payload.user,
        loading: false,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
