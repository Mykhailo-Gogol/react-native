import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './TodoItemStyle'

import { IProps } from '../../../interfaces/ITodo'

const TodoItem = ({ item, handleDeleteTodo }: IProps) => {
  return (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem
