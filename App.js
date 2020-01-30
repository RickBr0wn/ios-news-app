/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {Container, Text} from 'native-base'
import TabScreen from './src/screens/tabScreen'

const App: () => React$Node = () => {
  return (
    <Container>
      <TabScreen />
    </Container>
  )
}

export default App
