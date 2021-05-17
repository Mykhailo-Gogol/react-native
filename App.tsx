import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./AppStyle";

import todos from "./data.json";

// I
import { ITodo } from "./interfaces/ITodo";

// Comps
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";

export default function App() {
  const [list, setList] = useState<ITodo[]>(todos);

  const handleDeleteTodo = (id: number) =>
    setList((prev) => prev.filter((item) => id !== item.id));

  const handleAddTodo = (text: string) => {
    const item: ITodo = {
      text,
      id: Math.random(),
    };

    setList((prev) => [item, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner_container}>
        <AddTodo handleAddTodo={handleAddTodo} />
        <View style={styles.list}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <Todo
                item={item}
                handleDeleteTodo={handleDeleteTodo}
                key={item.id}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
