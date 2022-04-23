import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Producer from '../screens/Producer';
import Cesta from '../screens/Cesta';
import Resumo from '../screens/Resumo';

const Stack = createNativeStackNavigator();

export default function ProducerRouters({ DefaultComponent = Home }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='Producer' component={Producer} />
      <Stack.Screen name='Cesta' component={Cesta} />
      <Stack.Screen name='Resumo' component={Resumo} />
    </Stack.Navigator>
  )
}
