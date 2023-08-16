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

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (description && amount) {
      const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      };
      onAddExpense(newExpense);
      setDescription("");
      setAmount("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add New Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
}

export default AddExpenseForm;
