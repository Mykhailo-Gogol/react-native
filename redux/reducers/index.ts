import { combineReducers } from 'redux'
import inputReducer from './inputReducer'
import listReducer from './listReducer'
import { IRootReducer } from '../../interfaces/IRootReducer'

const rootReducer = combineReducers<IRootReducer>({
  input: inputReducer,
  list: listReducer,
})

export default rootReducer
