import types from './types';

const INITIAL_STATE = {
  apartments: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.APARTMENT_CREATE_SUCCESS:
      return {
        ...state,
        apartments: [...state.apartments, payload],
      };
    default:
      return state;
  }
};

export default reducer;
