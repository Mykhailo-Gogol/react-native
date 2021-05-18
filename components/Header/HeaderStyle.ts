import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Styles {
  container: ViewStyle
  text: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'coral',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 80,
  },
  text: {
    fontSize: 30,
    color: 'white',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
})
