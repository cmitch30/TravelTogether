import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseItem: {
    marginBottom: 5,
  },
  expenseText: {
    fontSize: 16,
  },
});

function ExpensesScreen() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Dinner', amount: 30 },
    { id: 2, description: 'Tickets', amount: 50 },
    // Add more expenses
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shared Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>
              {item.description}: ${item.amount}
            </Text>
          </View>
        )}
      />
      {/* <Button title="Add Expense" onPress={() => /* Navigate to AddExpenseForm */} 
      {/* <Button title="Settle Expenses" onPress={() => /* Navigate to SettleExpenses */} 
    </View>
  );
}

export default ExpensesScreen;
