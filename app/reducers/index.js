import { combineReducers } from 'redux'
import { testReducer } from './test.js'

const rootReducer = combineReducers({
	testReducer,
})

export default rootReducer