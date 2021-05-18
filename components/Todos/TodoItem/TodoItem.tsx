import React from 'react'

// Styles
import { styles } from './TodoItemStyle'

// Native
import { TouchableOpacity, Text } from 'react-native'

// Interface
import { IProps } from '../../../interfaces/ITodo'

const TodoItem = ({ item, handleDeleteTodo }: IProps) => {
  return (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem
