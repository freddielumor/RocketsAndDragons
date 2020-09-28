import fetchData from '../../utils/fetchData'
import { DRAGONS_DATA_ENDPOINT } from '../../utils/apiConfig'

export const GET_DRAGONS_DATA_START = 'GET_DRAGONS_DATA_START'
export const GET_DRAGONS_DATA_SUCCESS = 'GET_DRAGONS_DATA_SUCCESS'
export const GET_DRAGONS_DATA_ERROR = 'GET_DRAGONS_DATA_ERROR'

export const getDragonsDataStart = () => {
  return {
    type: GET_DRAGONS_DATA_START,
  }
}

export const getDragonsDataSuccess = (payload: any) => {
  return {
    type: GET_DRAGONS_DATA_SUCCESS,
    payload,
  }
}

export const getDragonsDataError = (payload: any) => {
  return {
    type: GET_DRAGONS_DATA_ERROR,
    payload,
  }
}

export function getDragonsData() {
  return async (dispatch: any) => {
    dispatch(getDragonsDataStart())

    try {
      const response = await fetchData(DRAGONS_DATA_ENDPOINT)
      dispatch(getDragonsDataSuccess(response.data))
    } catch (error) {
      dispatch(getDragonsDataError(error.statusText))
    }
  }
}
