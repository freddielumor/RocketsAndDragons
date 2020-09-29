import { AllRockets, Rocket } from './rocket'

// All Rocket Types
export const GET_ROCKETS_DATA_START = 'GET_ROCKETS_DATA_START'
export const GET_ROCKETS_DATA_SUCCESS = 'GET_ROCKETS_DATA_SUCCESS'
export const GET_ROCKETS_DATA_ERROR = 'GET_ROCKETS_DATA_ERROR'

export interface GetRocketsDataPendingAction {
  type: typeof GET_ROCKETS_DATA_START
}

export interface GetRocketsDataSuccessAction {
  type: typeof GET_ROCKETS_DATA_SUCCESS
  payload: AllRockets[]
}

export interface GetRocketsDataErrorAction {
  type: typeof GET_ROCKETS_DATA_ERROR
  payload: string
}

export type RocketsActionTypes =
  | GetRocketsDataPendingAction
  | GetRocketsDataSuccessAction
  | GetRocketsDataErrorAction

// Single Rocket Types
export const GET_ROCKET_ITEM_DATA_START = 'GET_ROCKET_ITEM_DATA_START'
export const GET_ROCKET_ITEM_DATA_SUCCESS = 'GET_ROCKET_ITEM_DATA_SUCCESS'
export const GET_ROCKET_ITEM_DATA_ERROR = 'GET_ROCKET_ITEM_DATA_ERROR'

export interface GetRocketItemPendingAction {
  type: typeof GET_ROCKET_ITEM_DATA_START
}

export interface GetRocketItemSuccessAction {
  type: typeof GET_ROCKET_ITEM_DATA_SUCCESS
  payload: Rocket[]
}

export interface GetRocketItemErrorAction {
  type: typeof GET_ROCKET_ITEM_DATA_ERROR
  payload: string
}

export type SingleRocketActionTypes =
  | GetRocketItemPendingAction
  | GetRocketItemSuccessAction
  | GetRocketItemErrorAction
