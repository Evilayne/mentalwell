import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function TelaDeBemVindo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BEM-VINDO(A)</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('PainelPrincipal')}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A5A44',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#C28F7B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
  },
});
