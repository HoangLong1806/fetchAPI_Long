import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Master from "./Views/Screen_1";


const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Master"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Master" component={Master} />
        {/* <stack.Screen name="Detail" component={Detail} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

