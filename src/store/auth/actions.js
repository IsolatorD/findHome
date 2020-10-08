import * as Types from './types'

export const logOut = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({
      type: Types.LOGOUT,
      payload: null
    })
  }
}