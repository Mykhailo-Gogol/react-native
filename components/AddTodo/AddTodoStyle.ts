import { StyleSheet, TextInput, ViewStyle } from "react-native";

interface IStylesS {
  input: TextInput;
  inner_container: ViewStyle;
}

export const styles = StyleSheet.create({
  inner_container: {
    marginBottom: 30,
    marginTop: 30,
    width: 320,
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#F5ECCD",
  },
});
