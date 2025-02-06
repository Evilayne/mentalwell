import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const AgendaConsultas = () => {
  const [consultas, setConsultas] = useState([
    { id: '1', data: '2025-02-10', descricao: 'Consulta 1' },
    { id: '2', data: '2025-02-12', descricao: 'Consulta 2' },
  ]);

  const adicionarConsulta = () => {
    const novaConsulta = { id: '3', data: '2025-02-15', descricao: 'Consulta 3' };
    setConsultas([...consultas, novaConsulta]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda de Consultas</Text>

      <FlatList 
        data={consultas}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.data} - {item.descricao}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.addButton} onPress={adicionarConsulta}>
        <Text style={styles.addButtonText}>Adicionar Consulta</Text>
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
  title: {
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
    fontSize: 16,
    color: '#6D4C41',
  },
  addButton: {
    backgroundColor: '#C28F7B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AgendaConsultas;