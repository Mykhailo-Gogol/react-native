import { StyleSheet, TextStyle } from 'react-native'

interface Styles {
  text: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  text: {
    fontSize: 30,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#FCC8C2',
    padding: 10,
  },
})
