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

function AddActivityForm({ onAddActivity }) {
  const [activity, setActivity] = useState("");

  const handleAddActivity = () => {
    if (activity) {
      onAddActivity(activity);
      setActivity("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Activity to Itinerary</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity"
        value={activity}
        onChangeText={setActivity}
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
    </View>
  );
}

export default AddActivityForm;
