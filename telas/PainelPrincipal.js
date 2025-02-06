import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PainelPrincipal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel Principal</Text>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Recursos Educacionais')}
      >
        <Text style={styles.botaoTexto}>Ir para Recursos Educacionais</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Agenda de Consultas')}
      >
        <Text style={styles.botaoTexto}>Agenda de Consultas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Histórico de Consultas')}
      >
        <Text style={styles.botaoTexto}>Histórico de Consultas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Lista de Pacientes')}
      >
        <Text style={styles.botaoTexto}>Lista de Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7D7CB',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8A5A44',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#C28F7B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PainelPrincipal;