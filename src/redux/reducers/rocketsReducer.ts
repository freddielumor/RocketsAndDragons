import {
  GET_ROCKETS_DATA_START,
  GET_ROCKETS_DATA_SUCCESS,
  GET_ROCKETS_DATA_ERROR,
} from '../../types/rocketActionTypes'
import { AllRockets } from '../../types/rocket'
import { RocketsActionTypes } from '../../types/rocketActionTypes'

interface IState {
  rockets: AllRockets[]
  stage: string
  error: string | null
}

const initialState = {
  rockets: [],
  stage: 'pending',
  error: null,
}

export default function (
  state = initialState,
  action: RocketsActionTypes,
): IState {
  switch (action.type) {
    case GET_ROCKETS_DATA_START:
      return {
        ...state,
      }
    case GET_ROCKETS_DATA_SUCCESS:
      return {
        ...state,
        stage: 'success',
        rockets: action.payload,
      }
    case GET_ROCKETS_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
