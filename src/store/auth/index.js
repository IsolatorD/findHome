import * as Types from './types'

const defaultState = {
  user: null,
  token: null
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case Types.INSERT_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case Types.LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case Types.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case Types.LOGOUT:
      return {
        ...defaultState
      }
    default:
      return state
  }
}

export default auth