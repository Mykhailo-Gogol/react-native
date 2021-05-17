import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "purple",
  },
});
