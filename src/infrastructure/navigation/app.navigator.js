import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";

import { ProfileNavigator } from './profile.navigator';

const Tab = createBottomTabNavigator();


// https://oblador.github.io/react-native-vector-icons/
const TAB_ICON = {
  Profile: "md-person",
  ExpenseHistory: "aperture",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const ExpenseHistory = () => (
  <SafeArea>
    <Text>Test</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="ExpenseHistory" component={ExpenseHistory} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);