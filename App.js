import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import PainelPrincipal from './telas/PainelPrincipal';
import BemVindo from './telas/BemVindo';
import RecursosEducacionais from './telas/RecursosEducacionais';
import AgendaConsultas from './telas/AgendaConsultas';
import HistoricoConsultas from './telas/HistoricoConsultas';
import ListaPacientes from './telas/ListaPacientes';
import PerfilPaciente from './telas/PerfilPaciente';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator initialRouteName="Bem-Vindo">
      <Drawer.Screen name="Bem-Vindo" component={BemVindo} />
      <Drawer.Screen name="Painel Principal" component={PainelPrincipal} />
      <Drawer.Screen name="Recursos Educacionais" component={RecursosEducacionais} />
      <Drawer.Screen name="Agenda de Consultas" component={AgendaConsultas} />
      <Drawer.Screen name="Histórico de Consultas" component={HistoricoConsultas} />
      <Drawer.Screen name="Lista de Pacientes" component={ListaPacientes} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PerfilPaciente" component={PerfilPaciente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}