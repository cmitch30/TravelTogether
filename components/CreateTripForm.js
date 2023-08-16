import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

function CreateTripForm({ onCreateTrip }) {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCreateTrip = () => {
    // Validate inputs
    if (destination && startDate && endDate) {
      const tripData = {
        destination,
        startDate,
        endDate,
      };
      onCreateTrip(tripData);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Create New Trip</Text>
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Start Date (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
      />
      <Button title="Create Trip" onPress={handleCreateTrip} />
    </View>
  );
}

export default CreateTripForm;
