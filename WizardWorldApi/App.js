import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [casa, setCasa] = useState(null);
  
  const sorteiaCasa = () => {
    const idCasas = ["0367baf3-1cb6-4baf-bede-48e17e1cd005", "805fd37a-65ae-4fe5-b336-d767b8b7c73a", "85af6295-fd01-4170-a10b-963dd51dce14", "a9704c47-f92e-40a4-8771-ed1899c9b9c1"]
    sorteioId = Math.floor(Math.random() * (4));
    console.log(idCasas[sorteioId])
    fetch('https://wizard-world-api.herokuapp.com/Houses/'+ idCasas[sorteioId])
      .then(response => response.json())
      .then(json => {setCasa(json);})
      .catch(error => {
        console.error('error', error);
      })
  }

  return (
    <View style={styles.container}>
      {!casa? (
        <>
          <Button title="Sortear casa" onPress={sorteiaCasa}/>
        </>
      ):(
        <>
          <Text>{casa.name}</Text>
          {/* <Image source={imagem} style={{ width: "30%", height: "30%" }} resizeMode="contain"/> */}
          <Button title="Voltar" onPress={()=> setCasa(null)}/>
        </>
      
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
