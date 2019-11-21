import types from './types';

const INITIAL_STATE = {
  apartmentsList: [],
  single: {},
  edit: {},
  loading: false,
  apartmentFormMessages: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_ALL_APARTMENTS:
      return {
        ...state,
        apartmentsList: payload,
      };
    case types.APARTMENT_CREATE_SUCCESS:
      return {
        ...state,
        apartmentsList: [...state.apartmentsList, payload],
      };
    case types.APARTMENT_CREATE_FAIL:
      return {
        ...state,
        apartmentFormMessages: payload,
      };
    case types.GET_EXISTING_APARTMENT:
      return {
        ...state,
        single: payload,
        edit: payload,
      };
    case types.START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.STOP_REQUEST:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
