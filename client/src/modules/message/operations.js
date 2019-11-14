import messageActions from './actions';

const displayMessageAndClear = (message, type) => async dispatch => {
  switch (type) {
    case 'success':
      dispatch(messageActions.showSuccessMessage(message));
      break;
    case 'error':
      dispatch(messageActions.showErrorMessage(message));
      break;
    case 'warning':
      dispatch(messageActions.showWarningMessage(message));
      break;
    default:
      break;
  }
  setTimeout(() => dispatch(messageActions.clearMessage()), 3000);
};

export default {
  displayMessageAndClear,
};
