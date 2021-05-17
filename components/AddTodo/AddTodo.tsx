import { styles } from "./AddTodoStyle";

import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import { IAddProps } from "../../interfaces/ITodo";

const AddTodo = ({ handleAddTodo }: IAddProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const addItem = () => {
    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <View style={styles.inner_container}>
      <TextInput
        value={inputValue}
        placeholder={"new todo ...."}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      <Button title="Add todo" onPress={addItem} />
    </View>
  );
};

export default AddTodo;
