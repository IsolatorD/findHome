import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import auth from './auth'

const rootReducer = combineReducers({
  auth
})

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)

export default store