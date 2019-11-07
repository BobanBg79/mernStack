import actions from './actions';
import axios from 'axios';

const getItems = () => async dispatch => {
  dispatch(actions.setItemsLoading);
  console.log(1);
  try {
    const { data } = await axios.get('/api/items');
    dispatch(actions.getItems(data));
  } catch (err) {
    console.log(err);
  }
};

const createItem = newItem => async dispatch => {
  dispatch(actions.setItemsLoading);
  try {
    const response = await axios.post('/api/items/add', newItem);
    dispatch(actions.createItem(response.data));
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = id => async dispatch => {
  dispatch(actions.setItemsLoading);
  try {
    await axios.delete(`/api/items/${id}`);
    dispatch(actions.deleteItem(id));
  } catch (err) {
    console.log(err);
  }
};

export default {
  getItems,
  createItem,
  deleteItem,
};
