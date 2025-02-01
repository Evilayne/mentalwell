import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PainelPrincipal({ navigation }) {
  const consultas = [
    { hora: '7 AM', paciente: 'Maria Oliveira' },
    { hora: '8 AM', paciente: 'João Silva' },
    { hora: '9 AM', paciente: 'Ana Souza' },
    { hora: '10 AM', paciente: 'Carlos Pereira' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HOJE</Text>
      <Text style={styles.subtitulo}>BEM-VINDO(A) EDLAYNE!</Text>

      <TouchableOpacity style={styles.botaoConsulta}>
        <Text style={styles.botaoTexto}>Adicionar consulta</Text>
      </TouchableOpacity>

      <ScrollView style={styles.lista}>
        {consultas.map((consulta, index) => (
          <View key={index} style={styles.consulta}>
            <Text style={styles.hora}>{consulta.hora}</Text>
            <Text style={styles.paciente}>Consulta com {consulta.paciente}</Text>
            <TouchableOpacity>
              <Text style={styles.verPerfil}>Ver perfil</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8A5A44',
  },
  subtitulo: {
    fontSize: 18,
    color: '#8A5A44',
    marginBottom: 10,
  },
  botaoConsulta: {
    backgroundColor: '#C28F7B',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
  consulta: {
    backgroundColor: '#EED8C9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  hora: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8A5A44',
  },
  paciente: {
    fontSize: 14,
    color: '#6D4C41',
  },
  verPerfil: {
    color: '#C28F7B',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});
