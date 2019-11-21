import { combineReducers } from 'redux';
import itemsReducer from './items';
import authReducer from './auth';
import messageReducer from './message';
import apartmentReducer from './apartment';

export default combineReducers({
  item: itemsReducer,
  auth: authReducer,
  messages: messageReducer,
  apartments: apartmentReducer,
});
