import { combineReducers } from 'redux';
import itemsReducer from './items';
import authReducer from './auth';
import messageReducer from './message';

export default combineReducers({
  item: itemsReducer,
  auth: authReducer,
  messages: messageReducer,
});
