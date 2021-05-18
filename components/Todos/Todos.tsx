import React from 'react'

// Styles
import { styles } from './TodosStyle'

// Native
import { View, FlatList } from 'react-native'

// Interfaces
import { ITodo } from '../../interfaces/ITodo'
import { IRootReducer } from '../../interfaces/IRootReducer'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
  listAddItemAction,
  listDeleteItemAction,
} from '../../redux/actions/list'

// Comps
import TodoItem from './TodoItem/TodoItem'
import AddTodo from './AddTodo/AddTodo'

const Todos: React.FC = () => {
  const list = useSelector((state: IRootReducer) => state.list)
  const dispatch = useDispatch()

  const handleDeleteTodo = (id: number) => {
    dispatch(listDeleteItemAction(id))
  }
  const handleAddTodo = (text: string) => {
    const task: ITodo = {
      text,
      id: Math.random(),
    }
    dispatch(listAddItemAction(task))
  }
  return (
    <View style={styles.inner_container}>
      <AddTodo handleAddTodo={handleAddTodo} />
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              handleDeleteTodo={handleDeleteTodo}
              key={item.id}
            />
          )}
        />
      </View>
    </View>
  )
}

export default Todos
