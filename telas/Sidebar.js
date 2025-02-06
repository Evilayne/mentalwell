import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Psicóloga Edlayne</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PainelPrincipal')}>
        <Text>Painel Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecursosEducacionais')}>
        <Text>Recursos Educacionais</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#FBE8D3',
    padding: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nome: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#6D4C41',
  },
});

export default Sidebar;