import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchResult from "../Components/SearchResult"
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

const SearchStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}
    initialRouteName="Search"
    >
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Result'  component={SearchResult} />
    </Stack.Navigator>
  )
}

export default SearchStack