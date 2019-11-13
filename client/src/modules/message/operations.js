import messageActions from './actions';

const displayMessageAndClear = message => async dispatch => {
  dispatch(messageActions.showMessage(message));
  setTimeout(() => dispatch(messageActions.clearMessage()), 3000);
};

export default {
  displayMessageAndClear,
};
