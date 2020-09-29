import {
  RocketsActionTypes,
  SingleRocketActionTypes,
} from './rocketActionTypes'
import {
  DragonsActionTypes,
  SingleDragonActionTypes,
} from './dragonActionTypes'

export type AppActions =
  | RocketsActionTypes
  | SingleRocketActionTypes
  | DragonsActionTypes
  | SingleDragonActionTypes
