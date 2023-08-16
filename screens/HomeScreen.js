import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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
