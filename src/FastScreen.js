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

class FastScreen extends React.Component {
  render() {
    return (
      <View style={styles}>
        <Text>Hello from fast</Text>
          <Timer/>
      </View>
    );
  }
}

export default FastScreen;
