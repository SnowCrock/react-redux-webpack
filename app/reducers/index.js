import { combineReducers } from 'redux'
import { counter1, counter2 } from './test.js'

const rootReducer = combineReducers({
  counter1,
  counter2,
})

export default rootReducer