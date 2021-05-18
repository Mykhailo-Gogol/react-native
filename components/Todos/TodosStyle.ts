import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Styles {
  inner_container: ViewStyle
  list: TextStyle
  form: { width: number }
}

export const styles = StyleSheet.create<Styles>({
  inner_container: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
  },

  list: {
    marginTop: 20,
    width: 320,
  },

  form: {
    width: 320,
  },
})
