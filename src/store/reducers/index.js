import { combineReducers } from 'redux'
import { sequenceReducer } from './sequenceReducer'

const rootReducer = combineReducers({
  sequence: sequenceReducer
})

export default rootReducer
