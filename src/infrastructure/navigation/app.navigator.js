import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";

import { ProfileNavigator } from './profile.navigator';
import { BudgetNavigator } from './budget.navigator';

const Tab = createBottomTabNavigator();


// https://oblador.github.io/react-native-vector-icons/
const TAB_ICON = {
  Profile: "md-person",
  History: "aperture",
  Goals: "podium-sharp",
  Budget: "leaf",
  Flow: "swap-vertical"
};

const Goals = () => (
  <SafeArea>
    <Text>Goals</Text>
  </SafeArea>
);
const ExpenseHistory = () => (
  <SafeArea>
    <Text>Test</Text>
  </SafeArea>
);
const Flow = () => (
  <SafeArea>
    <Text>Flow</Text>
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
      <Tab.Screen name="Flow" component={Flow} />
      <Tab.Screen name="Budget" component={BudgetNavigator} />
      <Tab.Screen name="Goals" component={Goals} />
      <Tab.Screen name="History" component={ExpenseHistory} />
    </Tab.Navigator>
  </NavigationContainer>
);