/*crud*/


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


let produtos = []

export default function App() {
  const [entradaNome, setEntradaNome] = useState('')
  const [ entradaValor,setEntradaValor] = useState('')

  function cadastra(){
    let produto = {
nome: entradaNome,
valor: Number (entradaValor)

    }

produtos.push(produto)

setEntradaNome('')
setEntradaValor('')

console.log(produtos)

  }
  return (

    <View style={styles.container}>
      <Text> CRUD </Text>
      <TextInput 
      value={entradaNome}
      onChangeText={setEntradaNome}
      style={styles.inputs}
      placeholder='nome...'
      />
         <TextInput 
      value={entradaValor}
      onChangeText={setEntradaValor}
      style={styles.inputs}
      placeholder='valor...'
      />
      <TouchableOpacity style={styles.botao} onPress={cadastra}> 
      <Text style={styles.textoBotao}> ADD </Text>
      </TouchableOpacity>
      <View>
      {produtos.map((produtos, index) => (
     <Text key={index}>{produtos.nome} - R${produtos.valor.toFixed(2)}</Text> 

      ) )}

      </View>

      <StatusBar style="auto" />
    </View>


 ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#66ff66',
    gap: 5,

  },

    inputs: {
borderWidth:1,
 backgroundColor: '#66ff66'
    },

    botao: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor:'cyan'


    },
    
    textoBotao:{
    },




});
