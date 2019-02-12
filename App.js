import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Timer from "./src/Timer";
import FastScreen from "./src/FastScreen";
import FeastScreen from "./src/FeastScreen";

const TabNavigator = createBottomTabNavigator({
  Fast: FastScreen,
  Feast: FeastScreen
});

export default createAppContainer(TabNavigator);

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
*/
