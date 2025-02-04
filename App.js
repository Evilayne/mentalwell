import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeBemVindo from './telas/TelaDeBemVindo';
import PainelPrincipal from './telas/PainelPrincipal';
import PerfilPaciente from './telas/PerfilPaciente';
import AdicionarConsulta from './telas/AdicionarConsulta'; // Adicionando de volta

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeBemVindo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaDeBemVindo" component={TelaDeBemVindo} />
        <Stack.Screen name="PainelPrincipal" component={PainelPrincipal} />
        <Stack.Screen name="PerfilPaciente" component={PerfilPaciente} /> 
        <Stack.Screen name="AdicionarConsulta" component={AdicionarConsulta} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}