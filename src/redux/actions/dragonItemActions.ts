import { Dispatch } from 'redux'
import fetchData from '../../utils/fetchData'
import { DRAGONS_DATA_ENDPOINT } from '../../utils/apiConfig'
import {
  GET_DRAGON_ITEM_DATA_START,
  GET_DRAGON_ITEM_DATA_SUCCESS,
  GET_DRAGON_ITEM_DATA_ERROR,
} from '../../types/dragonActionTypes'
import { Dragon } from '../../types/dragon'
import { AppActions } from '../../types/appActionTypes'

export const getDragonItemStart = (): AppActions => {
  return {
    type: GET_DRAGON_ITEM_DATA_START,
  }
}

export const getDragonItemSuccess = (payload: Dragon[]): AppActions => {
  return {
    type: GET_DRAGON_ITEM_DATA_SUCCESS,
    payload,
  }
}

export const getDragonItemError = (payload: string): AppActions => {
  return {
    type: GET_DRAGON_ITEM_DATA_ERROR,
    payload,
  }
}

export function getDragonItemData(id: string) {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(getDragonItemStart())

    try {
      const response = await fetchData(`${DRAGONS_DATA_ENDPOINT}/${id}`)
      dispatch(getDragonItemSuccess(response.data))
    } catch (error) {
      dispatch(getDragonItemError(error.statusText))
    }
  }
}
