import { combineReducers } from 'redux'
import { counter1, counter2 ,testReducer} from './test.js'

const rootReducer = combineReducers({
  counter1,
  counter2,
  testReducer,
})

export default rootReducer