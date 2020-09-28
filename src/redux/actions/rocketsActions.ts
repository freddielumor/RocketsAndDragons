import { Dispatch } from 'redux'
import fetchData from '../../utils/fetchData'
import { ROCKETS_DATA_ENDPOINT } from '../../utils/apiConfig'
import {
  GET_ROCKETS_DATA_START,
  GET_ROCKETS_DATA_SUCCESS,
  GET_ROCKETS_DATA_ERROR,
} from '../../types/rocketActionTypes'
import { AllRockets } from '../../types/rocket'
import { AppActions } from '../../types/appActionTypes'

export const getRocketsDataStart = (): AppActions => {
  return {
    type: GET_ROCKETS_DATA_START,
  }
}

export const getRocketsDataSuccess = (payload: AllRockets[]): AppActions => {
  return {
    type: GET_ROCKETS_DATA_SUCCESS,
    payload,
  }
}

export const getRocketsDataError = (payload: string): AppActions => {
  return {
    type: GET_ROCKETS_DATA_ERROR,
    payload,
  }
}

export function getRocketsData() {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(getRocketsDataStart())

    try {
      const response = await fetchData(ROCKETS_DATA_ENDPOINT)
      dispatch(getRocketsDataSuccess(response.data))
    } catch (error) {
      dispatch(getRocketsDataError(error.statusText))
    }
  }
}
