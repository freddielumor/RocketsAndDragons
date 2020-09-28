import { RockesActionTypes, SingleRocketActionTypes } from './rocketActionTypes'
import {
  DragonsActionTypes,
  SingleDragonActionTypes,
} from './dragonActionTypes'

export type AppActions =
  | RockesActionTypes
  | SingleRocketActionTypes
  | DragonsActionTypes
  | SingleDragonActionTypes
