import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header';
import Routers from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <NavigationContainer>
      <Header />
      <Routers />
    </NavigationContainer>
  </View>
);

export default App;
