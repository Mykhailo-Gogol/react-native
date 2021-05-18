import { ITodo } from '../../interfaces/ITodo'
import { TItemList } from '../action-interfaces/listActionInterface'

import { ADD_ITEM, DELETE_ITEM } from '../action-interfaces/listActionInterface'

const innitialState: ITodo[] = []

const listReducer = (state = innitialState, action: TItemList) => {
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state]
    case DELETE_ITEM:
      return state.filter((el) => el.id !== action.payload)
    default:
      return innitialState
  }
}

export default listReducer
