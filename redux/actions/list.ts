import { ITodo } from '../../interfaces/ITodo'
import {
  ADD_ITEM,
  DELETE_ITEM,
  IListAdd,
  IListDelete,
} from '../action-interfaces/listActionInterface'

export const listAddItemAction = (task: ITodo): IListAdd => ({
  type: ADD_ITEM,
  payload: task,
})

export const listDeleteItemAction = (id: number): IListDelete => ({
  type: DELETE_ITEM,
  payload: id,
})
