import { Dragon, AllDragons } from './dragon'

// All Dragon Data Types
export const GET_DRAGONS_DATA_START = 'GET_DRAGONS_DATA_START'
export const GET_DRAGONS_DATA_SUCCESS = 'GET_DRAGONS_DATA_SUCCESS'
export const GET_DRAGONS_DATA_ERROR = 'GET_DRAGONS_DATA_ERROR'

export interface GetDragonsPendingAction {
  type: typeof GET_DRAGONS_DATA_START
}

export interface GetDragonsSuccessAction {
  type: typeof GET_DRAGONS_DATA_SUCCESS
  payload: AllDragons[]
}

export interface GetDragonsErrorAction {
  type: typeof GET_DRAGONS_DATA_ERROR
  payload: string
}

export type DragonsActionTypes =
  | GetDragonsPendingAction
  | GetDragonsSuccessAction
  | GetDragonsErrorAction

// Single Dragon Data Types
export const GET_DRAGON_ITEM_DATA_START = 'GET_DRAGON_ITEM_DATA_START'
export const GET_DRAGON_ITEM_DATA_SUCCESS = 'GET_DRAGON_ITEM_DATA_SUCCESS'
export const GET_DRAGON_ITEM_DATA_ERROR = 'GET_DRAGON_ITEM_DATA_ERROR'

export interface GetDragonItemPendingAction {
  type: typeof GET_DRAGON_ITEM_DATA_START
}

export interface GetDragonItemSuccessAction {
  type: typeof GET_DRAGON_ITEM_DATA_SUCCESS
  payload: Dragon[]
}

export interface GetDragonItemErrorAction {
  type: typeof GET_DRAGON_ITEM_DATA_ERROR
  payload: string
}

export type SingleDragonActionTypes =
  | GetDragonItemPendingAction
  | GetDragonItemSuccessAction
  | GetDragonItemErrorAction
