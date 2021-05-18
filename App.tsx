import React from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './redux/one-store'

// Native
import { View } from 'react-native'

// Comps
import Header from './components/Header/Header'
import Todos from './components/Todos/Todos'

// Style
import { styles } from './AppStyle'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Todos />
      </View>
    </Provider>
  )
}

export default App
