import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TelaBemVindo({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Texto Bem-vindo */}
      <Text style={styles.welcomeText}>BEM-VINDO(A)</Text>

      {/* Botão Log in */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0', // Fundo branco/bege claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A5A44', // Cor marrom suave
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C28F7B', // Cor pêssego/marrom claro
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: '#FFFFFF', // Texto branco no botão
    fontSize: 16,
    fontWeight: '600',
  },
});
