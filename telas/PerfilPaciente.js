import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PerfilPaciente = ({ route, navigation }) => {
  const { paciente } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Paciente</Text>
      
      <Text style={styles.texto}>Nome: {paciente.nome}</Text>
      <Text style={styles.texto}>Idade: {paciente.idade}</Text>
      <Text style={styles.texto}>Email: {paciente.email}</Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoTexto}>Voltar</Text>
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
    color: '#8A5A44',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: '#6D4C41',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#C28F7B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PerfilPaciente;