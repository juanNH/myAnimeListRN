import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {NavigationRouter} from './src/navigationRouter/NavigationRouter';
const App = () => {
  return (
    <NavigationContainer>
      <NavigationRouter />
    </NavigationContainer>
  );
};

export default App;
