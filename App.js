
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Scan, SignUp} from './src/screens'
import Tabs from './src/navigation/tabs';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    initialRouteName={"SignUp"}
    >
    
      <Stack.Screen name="SignUp" component={SignUp}/>

      {/* Tabs */}

      <Stack.Screen name="Home" component={Tabs}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


