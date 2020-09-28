import {
  GET_DRAGONS_DATA_START,
  GET_DRAGONS_DATA_SUCCESS,
  GET_DRAGONS_DATA_ERROR,
} from '../actions/dragonsActions'

const initialState = {
  dragons: [],
  stage: 'pending',
  error: null,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_DRAGONS_DATA_START:
      return {
        ...state,
      }
    case GET_DRAGONS_DATA_SUCCESS:
      return {
        ...state,
        stage: 'success',
        dragons: action.payload,
      }
    case GET_DRAGONS_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
