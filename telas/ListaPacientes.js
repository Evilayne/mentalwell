import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';

const ListaPacientes = ({ navigation }) => {
  const [pacientes, setPacientes] = useState([
    { id: '1', nome: 'Maria Silva' },
    { id: '2', nome: 'João Souza' },
  ]);

  const [pesquisa, setPesquisa] = useState('');

  const buscarPacientes = () => {
    return pacientes.filter(paciente => paciente.nome.toLowerCase().includes(pesquisa.toLowerCase()));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Pacientes</Text>

      <TextInput 
        style={styles.input}
        placeholder="Buscar Paciente"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <FlatList
        data={buscarPacientes()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('PerfilPaciente', { paciente: item })}
          >
            <Text style={styles.itemText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
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
  input: {
    height: 40,
    borderColor: '#BBA59B',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#FAF4F0',
  },
  item: {
    backgroundColor: '#FBE8D3',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#6D4C41',
  },
});

export default ListaPacientes;