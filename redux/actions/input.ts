import {
  IInputChange,
  IInputClear,
  INPUT_CHANGE,
  INPUT_CLEAR,
} from '../action-interfaces/inputActionInterface'

export const inputChangeAction = (text: string): IInputChange => ({
  type: INPUT_CHANGE,
  payload: text,
})

export const inputClearAction = (): IInputClear => ({
  type: INPUT_CLEAR,
})
