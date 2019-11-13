import types from './types'
const INITIAL_STATE = {
  message: '',
  type: undefined,
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SHOW_MESSAGE:
      return { ...state, message: payload.message, type: payload.type }
    case types.CLEAR_MESSAGE:
      return { ...state, message: '', type: undefined }
    default:
      return state
  }
}

export default reducer
