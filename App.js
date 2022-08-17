import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SearchStack from "./Screens/SearchStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackNavigation from "./Screens/StackNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let icon;
            if (route.name === "Home") {
              icon = ("home");
            } else if (route.name === "Search") {
              icon = "search";
            }
            return <Ionicons name={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home"  component={StackNavigation} />
        <Tab.Screen name="Search" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
