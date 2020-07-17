import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert, StatusBar } from "react-native";
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState(1)
  const [limit, setLimit] = useState(500)
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const genders = [
    { key: 1, label: 'Feminino' },
    { key: 1, label: 'Masculino' },
    { key: 1, label: 'Outros' }
  ]

  const pikerGender = genders.map((value, index) => {
    return <Picker.Item key={index} value={index} label={value.label} />
  })

  const validate = () => {
    if (name == '' || age == '') return Alert.alert('ATENÇÃO', 'Você deve preencher todos os campos!');
    else {
      setAge(0)
      setGender(1)
      setName('')
      setIsEnabled(false)
      setLimit(500)

      return Alert.alert('Cadastro completo',
      ` Nome: ${name} \n Idade: ${age} \n Sexo: ${genders[gender].label} \n Limite: ${limit.toFixed(0)} \n Estudante: ${isEnabled ? 'Sim' : 'Não'}`)
    } 
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'#2a1244'} barStyle="light-content" />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Abrir conta</Text>
      </View>


      <View style={styles.containerItems}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          onChangeText={text => setAge(text)}
          value={age}
        />

        <Text style={styles.label}>Sexo}</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#b1aeba', marginBottom: 30 }}>
          <Picker
            selectedValue={gender}
            onValueChange={(item, index) => setGender(item)}
          >

            {pikerGender}

          </Picker>
        </View>

        <Text style={styles.label}>Limite</Text>
        <Slider
          style={{ marginTop: 20 }}
          minimumTrackTintColor={'#2a1244'}
          thumbTintColor={'#2a1244'}
          minimumValue={100}
          maximumValue={1000}
          onValueChange={(value) => setLimit(value)}
          value={limit}
        />

        <Text style={styles.limitText}>{limit.toFixed(0)}</Text>

        <Text style={styles.label}>Estudante</Text>

        <View style={styles.itemMargin}>
          <Text style={styles.labelSwitch}>Não</Text>

          <Switch
            trackColor={{ false: "#767577", true: "#b1aeba" }}
            thumbColor={isEnabled ? "#2a1244" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text style={styles.labelSwitch}>Sim</Text>
        </View>


        <TouchableOpacity style={styles.button} onPress={() => validate()}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",

  },
  title: {
    fontSize: 20,
    marginVertical: 40,
    fontWeight: 'bold',
    color: "#fff",
  },
  titleContainer: {
    height: 100,
    backgroundColor: "#2a1244",
    paddingHorizontal: 20,
    paddingTop: 30,
    width: '100%',
    justifyContent: "center"
  },
  label: {
    fontSize: 15,
    color: '#b1aeba'
  },
  labelSwitch: {
    fontSize: 15,
    color: '#b1aeba'
  },
  containerItems: {
    width: '100%',
    margin: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#b1aeba',
    padding: 10,
    marginBottom: 30,
    color: "#2a1244"
  },
  limitText: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
    color: "#2a1244"
  },
  itemMargin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 20
  },
  button: {
    height: 50,
    margin: 50,
    alignItems: "center",
    backgroundColor: "#2a1244",
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: 15,
  }
});
