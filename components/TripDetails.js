import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
  },
});

function TripDetails({ trip }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trip Details</Text>
      <Text style={styles.detailText}>Destination: {trip.destination}</Text>
      <Text style={styles.detailText}>Start Date: {trip.startDate}</Text>
      <Text style={styles.detailText}>End Date: {trip.endDate}</Text>
    </View>
  );
}

export default TripDetails;
