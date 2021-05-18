import React from 'react'

// Native
import { View, Text } from 'react-native'

// Styles
import { styles } from './HeaderStyle'

// 
const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}

export default Header
