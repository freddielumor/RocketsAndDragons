import {
  GET_ROCKETS_DATA_START,
  GET_ROCKETS_DATA_SUCCESS,
  GET_ROCKETS_DATA_ERROR,
} from '../actions/rockets'

const initialState = {
  rockets: [],
  rocketsLoaded: false,
  error: null,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_ROCKETS_DATA_START:
      return {
        ...state,
      }
    case GET_ROCKETS_DATA_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
        rocketsLoaded: true,
      }
    case GET_ROCKETS_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
