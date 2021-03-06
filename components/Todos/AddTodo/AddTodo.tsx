import React from 'react'

// Styles
import { styles } from './AddTodoStyle'

// Native
import { View, TextInput, Button } from 'react-native'

// Interfaces
import { IAddProps } from '../../../interfaces/ITodo'
import { IRootReducer } from '../../../interfaces/IRootReducer'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { inputChangeAction } from '../../../redux/actions/input'
import { inputClearAction } from '../../../redux/actions/input'

const AddTodo = ({ handleAddTodo }: IAddProps) => {
  const inputValue = useSelector((state: IRootReducer) => state.input)

  const dispatch = useDispatch()

  const handleInputChange = (text: string) => {
    dispatch(inputChangeAction(text))
  }

  const addItem = () => {
    handleAddTodo(inputValue)
    dispatch(inputClearAction())
  }

  return (
    <View style={styles.inner_container}>
      <TextInput
        value={inputValue}
        placeholder={'new todo ....'}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      <Button title="Add todo" onPress={() => addItem()} />
    </View>
  )
}

export default AddTodo
