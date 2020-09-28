import {
  GET_DRAGON_ITEM_DATA_START,
  GET_DRAGON_ITEM_DATA_SUCCESS,
  GET_DRAGON_ITEM_DATA_ERROR,
} from '../../types/dragonActionTypes'
import { Dragon } from '../../types/dragon'
import { SingleDragonActionTypes } from '../../types/dragonActionTypes'

interface IState {
  dragon: Dragon[]
  stage: string
  error: string | null
}

const initialState: IState = {
  dragon: [],
  stage: 'pending',
  error: null,
}

export default function (
  state = initialState,
  action: SingleDragonActionTypes,
): IState {
  switch (action.type) {
    case GET_DRAGON_ITEM_DATA_START:
      return {
        ...state,
      }
    case GET_DRAGON_ITEM_DATA_SUCCESS:
      return {
        ...state,
        stage: 'success',
        dragon: action.payload,
      }
    case GET_DRAGON_ITEM_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
