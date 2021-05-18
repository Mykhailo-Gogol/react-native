import { ITodo } from '../../interfaces/ITodo'

// Action
export const ADD_ITEM = '@list/ADD_ITEM'

export const DELETE_ITEM = '@list/DELETE_ITEM'

// Interface
export interface IListAdd {
  type: typeof ADD_ITEM
  payload: ITodo
}

export interface IListDelete {
  type: typeof DELETE_ITEM
  payload: number
}

// Type

export type TItemList = IListAdd | IListDelete
