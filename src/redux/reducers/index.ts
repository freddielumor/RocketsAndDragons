import { combineReducers } from 'redux'
import rocketsReducer from './rocketsReducer'
import dragonssReducer from './dragonsReducer'
import rocketItemReducer from './rocketItemReducer'
import dragonItemReducer from './dragonItemReducer'

export const rootReducer = combineReducers({
  rocketsData: rocketsReducer,
  dragonsData: dragonssReducer,
  rocketItemData: rocketItemReducer,
  dragonItemData: dragonItemReducer,
})

export type AppState = ReturnType<typeof rootReducer>
