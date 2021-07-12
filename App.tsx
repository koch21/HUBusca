import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes/routes';

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#242424" />
      <Routes />
    </NavigationContainer>
  );
}

export default App
