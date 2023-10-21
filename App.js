import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes.js';
import { AppRegistry } from 'react-native';
import Home from './src/pages/Home/Home.js';

AppRegistry.registerComponent('DinoTaON', () => Home);

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}

