import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const HistoricoConsultas = ({ navigation }) => {
  const [consultas, setConsultas] = useState([
    { id: '1', data: '2025-02-10', paciente: 'Maria Silva' },
    { id: '2', data: '2025-02-12', paciente: 'João Souza' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Consultas</Text>

      <FlatList
        data={consultas}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('PerfilPaciente', { paciente: { nome: item.paciente } })}
          >
            <Text style={styles.itemText}>{item.data} - {item.paciente}</Text>
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

export default HistoricoConsultas;