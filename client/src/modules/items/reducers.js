import types from './types';

const initialState = {
  items: [],
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ITEMS_LOADING:
      return { ...state, loading: true };
    case types.GET_ITEMS:
      return { ...state, items: [...state.items, ...payload] };
    case types.CREATE_ITEM:
      return { ...state, items: [...state.items, payload] };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
