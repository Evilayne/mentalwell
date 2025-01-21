/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import TelaDetails from './TelaDetails';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaHome} />
        <Drawer.Screen name="Details" component={TelaDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} */
  import React from 'react';
  import { View, Image, StyleSheet } from 'react-native';
  
  export default function App() {
    return (
      <View style={styles.container}>
        {/* Exemplo de imagem remota */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
  
        {/* Exemplo de imagem local */}
        <Image
          source={require('./assets/exemplo.png')}
          style={styles.image}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF7F0',
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
  });
  
