import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FF0000", // Red header text
  },
  button: {
    backgroundColor: "#FF0000", // Red button
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#fff", // White text
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to TravelTogether!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Trip")}
      >
        <Text style={styles.buttonText}>Create New Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
