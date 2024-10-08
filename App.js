// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';  // Importa o componente LoginScreen
import TelaDeCadastro from './src/TelaCadastro';  // Importa o componente TelaDeCadastro
import TelaInicial from './src/TelaInicial';  // Importa o componente TelaInicial
import Categoria from './src/Categoria'; // importa o componente Categoria
import Cardiologia from './src/cardiologia';// importa o componente cardiologia

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">  
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={TelaDeCadastro} />
        <Stack.Screen name="Categoria" component={Categoria}/>
        <Stack.Screen name="Cardiologia" component={Cardiologia}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
