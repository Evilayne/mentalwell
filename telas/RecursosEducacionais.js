import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';

const RecursosEducacionais = () => {
  const [livros, setLivros] = useState([
    { id: '1', nome: 'Livro 1', link: 'https://link1.com' },
    { id: '2', nome: 'Livro 2', link: 'https://link2.com' },
  ]);
  
  const [novoLivro, setNovoLivro] = useState('');
  const [linkLivro, setLinkLivro] = useState('');

  const adicionarLivro = () => {
    if (novoLivro && linkLivro) {
      setLivros([...livros, { id: (livros.length + 1).toString(), nome: novoLivro, link: linkLivro }]);
      setNovoLivro('');
      setLinkLivro('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recursos Educacionais</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do livro" 
        value={novoLivro} 
        onChangeText={setNovoLivro}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Link do livro" 
        value={linkLivro} 
        onChangeText={setLinkLivro}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={adicionarLivro}>
        <Text style={styles.addButtonText}>Adicionar Recurso</Text>
      </TouchableOpacity>

      <FlatList 
        data={livros}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={styles.itemText}>{item.link}</Text>
          </View>
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
  title: {
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
  addButton: {
    backgroundColor: '#C28F7B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
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
});

export default RecursosEducacionais;