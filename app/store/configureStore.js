import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import rootReducer from '../reducers'

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk,promise)
)

const  createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise
)(createStore)
console.log(store)