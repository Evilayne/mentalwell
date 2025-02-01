import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeBemVindo from './TelaDeBemVindo';
import PainelPrincipal from './PainelPrincipal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeBemVindo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaDeBemVindo" component={TelaDeBemVindo} />
        <Stack.Screen name="PainelPrincipal" component={PainelPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
