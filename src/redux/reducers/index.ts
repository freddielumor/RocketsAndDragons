import { combineReducers } from 'redux'
import rocketsReducer from './rocketsReducer'
import dragonssReducer from './dragonsReducer'

export default combineReducers({
  rocketsData: rocketsReducer,
  dragonsData: dragonssReducer,
})
