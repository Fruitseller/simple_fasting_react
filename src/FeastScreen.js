import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Timer from "./Timer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

class FeastScreen extends React.Component {
  render() {
    return (
      <View style={styles}>
        <Text>Welcome to Feast!!!!</Text>
        <Timer />
      </View>
    );
  }
}

export default FeastScreen;
