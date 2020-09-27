import { combineReducers } from 'redux'
import rocketsReducer from './rocketsReducer'

export default combineReducers({
  rocketsData: rocketsReducer,
})
