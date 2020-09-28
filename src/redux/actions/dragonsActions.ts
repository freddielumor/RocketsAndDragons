import { Dispatch } from 'redux'
import fetchData from '../../utils/fetchData'
import { DRAGONS_DATA_ENDPOINT } from '../../utils/apiConfig'
import {
  GET_DRAGONS_DATA_START,
  GET_DRAGONS_DATA_SUCCESS,
  GET_DRAGONS_DATA_ERROR,
} from '../../types/dragonActionTypes'
import { AllDragons } from '../../types/dragon'
import { AppActions } from '../../types/appActionTypes'

export const getDragonsDataStart = (): AppActions => {
  return {
    type: GET_DRAGONS_DATA_START,
  }
}

export const getDragonsDataSuccess = (payload: AllDragons[]): AppActions => {
  return {
    type: GET_DRAGONS_DATA_SUCCESS,
    payload,
  }
}

export const getDragonsDataError = (payload: string): AppActions => {
  return {
    type: GET_DRAGONS_DATA_ERROR,
    payload,
  }
}

export function getDragonsData() {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(getDragonsDataStart())

    try {
      const response = await fetchData(DRAGONS_DATA_ENDPOINT)
      dispatch(getDragonsDataSuccess(response.data))
    } catch (error) {
      dispatch(getDragonsDataError(error.statusText))
    }
  }
}
