import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerfilPaciente({ route }) {
  const navigation = useNavigation();
  const [paciente, setPaciente] = useState(route.params?.paciente || {
    nome: '',
    idade: '',
    sexo: '',
    ocupacao: '',
    telefone: '',
    consultas: '',
    notas: '',
  });

  const [editando, setEditando] = useState(!route.params?.paciente);

  const salvarPaciente = () => {
    if (!paciente.nome || !paciente.idade || !paciente.telefone) {
      Alert.alert('Erro', 'Preencha os campos obrigatórios.');
      return;
    }
    Alert.alert('Sucesso', editando ? 'Paciente atualizado!' : 'Paciente adicionado!');
    setEditando(false);
  };

  const excluirPaciente = () => {
    Alert.alert('Confirmação', 'Deseja excluir esse perfil?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Paciente</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Nome' 
        value={paciente.nome} 
        editable={editando} 
        onChangeText={(text) => setPaciente({ ...paciente, nome: text })} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Idade' 
        value={paciente.idade} 
        editable={editando} 
        keyboardType='numeric' 
        onChangeText={(text) => setPaciente({ ...paciente, idade: text })} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Sexo' 
        value={paciente.sexo} 
        editable={editando} 
        onChangeText={(text) => setPaciente({ ...paciente, sexo: text })} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Ocupação' 
        value={paciente.ocupacao} 
        editable={editando} 
        onChangeText={(text) => setPaciente({ ...paciente, ocupacao: text })} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Telefone' 
        value={paciente.telefone} 
        editable={editando} 
        keyboardType='phone-pad' 
        onChangeText={(text) => setPaciente({ ...paciente, telefone: text })} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Notas adicionais' 
        value={paciente.notas} 
        editable={editando} 
        multiline 
        onChangeText={(text) => setPaciente({ ...paciente, notas: text })} 
      />

      {editando ? (
        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarPaciente}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.botaoEditar} onPress={() => setEditando(true)}>
          <Text style={styles.botaoTexto}>Editar Perfil</Text>
        </TouchableOpacity>
      )}

      {!editando && (
        <TouchableOpacity style={styles.botaoExcluir} onPress={excluirPaciente}>
          <Text style={styles.botaoTexto}>Excluir Perfil</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7D7CB', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#563F2E', 
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
  botaoSalvar: {
    backgroundColor: '#C4A28F',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  botaoEditar: {
    backgroundColor: '#C4A28F',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  botaoExcluir: {
    backgroundColor: '#A67A65',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
});
