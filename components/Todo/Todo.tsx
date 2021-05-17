import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./TodoStyle";

import { IProps } from "../../interfaces/ITodo";

const Todo = ({ item, handleDeleteTodo }: IProps) => {
  return (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default Todo;
