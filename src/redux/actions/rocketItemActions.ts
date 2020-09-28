import { Dispatch } from 'redux'
import fetchData from '../../utils/fetchData'
import { ROCKETS_DATA_ENDPOINT } from '../../utils/apiConfig'
import {
  GET_ROCKET_ITEM_DATA_START,
  GET_ROCKET_ITEM_DATA_SUCCESS,
  GET_ROCKET_ITEM_DATA_ERROR,
} from '../../types/rocketActionTypes'
import { Rocket } from '../../types/rocket'
import { AppActions } from '../../types/appActionTypes'

export const getRocketItemStart = (): AppActions => {
  return {
    type: GET_ROCKET_ITEM_DATA_START,
  }
}

export const getRocketItemSuccess = (payload: Rocket[]): AppActions => {
  return {
    type: GET_ROCKET_ITEM_DATA_SUCCESS,
    payload,
  }
}

export const getRocketItemError = (payload: string): AppActions => {
  return {
    type: GET_ROCKET_ITEM_DATA_ERROR,
    payload,
  }
}

export function getRocketItemData(rocket_id: string) {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(getRocketItemStart())

    try {
      const response = await fetchData(`${ROCKETS_DATA_ENDPOINT}/${rocket_id}`)
      dispatch(getRocketItemSuccess(response.data))
    } catch (error) {
      dispatch(getRocketItemError(error.statusText))
    }
  }
}
