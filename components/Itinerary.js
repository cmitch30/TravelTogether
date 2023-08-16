import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activityItem: {
    marginBottom: 5,
  },
  activityText: {
    fontSize: 16,
  },
});

function Itinerary({ activities }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Itinerary</Text>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Itinerary;
