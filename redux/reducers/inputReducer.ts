import {
  TInputAction,
  INPUT_CHANGE,
  INPUT_CLEAR,
} from '../action-interfaces/inputActionInterface'

const innitialState: string = ''

const inputReducer = (state = innitialState, action: TInputAction) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload
    case INPUT_CLEAR:
      return innitialState

    default:
      return state
  }
}

export default inputReducer
