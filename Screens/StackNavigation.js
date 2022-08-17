import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import MovieDetails from './MovieDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}
    initialRouteName="Home"
    >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Movie' component={MovieDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigation