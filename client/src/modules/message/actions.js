import types from './types';

const showMessage = payload => ({
  type: types.SHOW_MESSAGE,
  payload,
});
const clearMessage = () => ({
  type: types.CLEAR_MESSAGE,
});

export default {
  showMessage,
  clearMessage,
};
