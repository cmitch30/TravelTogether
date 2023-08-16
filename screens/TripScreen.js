import React, { useState } from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
import TripDetails from "../components/TripDetails";
import Itinerary from "../components/Itinerary";
import AddActivityForm from "../components/AddActivityForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
});

function TripScreen() {
  const [trip, setTrip] = useState({
    destination: "Paris",
    startDate: "2023-08-25",
    endDate: "2023-08-30",
  });

  const [activities, setActivities] = useState([
    "Eiffel Tower visit",
    "Louvre Museum",
  ]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <TripDetails trip={trip} />
      </View>
      <View style={styles.section}>
        <Itinerary activities={activities} />
        <AddActivityForm onAddActivity={handleAddActivity} />
      </View>
      {/* Add other sections as needed */}
    </ScrollView>
  );
}

export default TripScreen;
