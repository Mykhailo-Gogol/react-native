import { ITodo } from '../../interfaces/ITodo'

export const ADD_ITEM = '@list/ADD_ITEM'

export const DELETE_ITEM = '@list/DELETE_ITEM'

export interface IListAdd {
  type: typeof ADD_ITEM
  payload: ITodo
}

export interface IListDelete {
  type: typeof DELETE_ITEM
  payload: number
}

export type TItemList = IListAdd | IListDelete
