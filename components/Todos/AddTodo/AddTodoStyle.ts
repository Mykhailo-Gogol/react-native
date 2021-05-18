import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  inner_container: ViewStyle
  input: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  inner_container: {
    marginBottom: 30,
    marginTop: 30,
    width: 320,
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#F5ECCD',
  },
})
