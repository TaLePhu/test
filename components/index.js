
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./GetStarted";
import ListBikes from "./ListBikes";
import AddBike from "./AddBike";

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="GetStarted"
        screenOptions={{ tabBarStyle: { display: "none" }, headerShown: false }}
      >
        <Tab.Screen name="GetStarted" component={GetStarted} />
        <Tab.Screen name="ListBikes" component={ListBikes} />
        <Tab.Screen name="AddBike" component={AddBike} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
