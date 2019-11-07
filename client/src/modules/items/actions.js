import types from './types';

const getItems = items => ({
  type: types.GET_ITEMS,
  payload: items,
});

const createItem = item => ({
  type: types.CREATE_ITEM,
  payload: item,
});

const deleteItem = itemId => ({
  type: types.DELETE_ITEM,
  payload: itemId,
});

const setItemsLoading = () => ({
  type: types.ITEMS_LOADING,
  payload: 'govno',
});

export default {
  getItems,
  createItem,
  deleteItem,
  setItemsLoading,
};
