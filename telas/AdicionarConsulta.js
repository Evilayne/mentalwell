import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AdicionarConsulta({ navigation }) {
  const [data, setData] = useState(new Date());
  const [titulo, setTitulo] = useState('');
  const [notas, setNotas] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [modoData, setModoData] = useState('date');
  const [mostrarPicker, setMostrarPicker] = useState(false);

  const selecionarDataHora = (event, selectedDate) => {
    setMostrarPicker(false);
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar consulta</Text>

      <View style={styles.dataHoraContainer}>
        <Text style={styles.label}>Data e Hora</Text>
        <TouchableOpacity onPress={() => { setModoData('date'); setMostrarPicker(true); }} style={styles.pickerBotao}>
          <Text style={styles.textoPicker}>{data.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModoData('time'); setMostrarPicker(true); }} style={styles.pickerBotao}>
          <Text style={styles.textoPicker}>{data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
      </View>

      {mostrarPicker && (
        <DateTimePicker
          value={data}
          mode={modoData}
          display="spinner"
          onChange={selecionarDataHora}
        />
      )}

      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} placeholder="Digite o título" />

      <Text style={styles.label}>Notas</Text>
      <TextInput style={styles.input} value={notas} onChangeText={setNotas} placeholder="Adicione notas" multiline />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Me lembrar</Text>
        <Switch value={lembrar} onValueChange={setLembrar} />
      </View>

      <TouchableOpacity style={styles.botaoSalvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8A5A44',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#8A5A44',
    marginBottom: 5,
  },
  pickerBotao: {
    backgroundColor: '#EED8C9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textoPicker: {
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoSalvar: {
    backgroundColor: '#C28F7B',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
  },
});
