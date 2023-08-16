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
  debtItem: {
    marginBottom: 5,
  },
  debtText: {
    fontSize: 16,
  },
});

function SettleExpenses() {
  const [debts, setDebts] = useState([
    { id: 1, from: 'John', to: 'Alice', amount: 20 },
    { id: 2, from: 'Alice', to: 'John', amount: 15 },
    // Add more debts
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settle Debts</Text>
      <FlatList
        data={debts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.debtItem}>
            <Text style={styles.debtText}>
              {item.from} owes {item.to}: ${item.amount}
            </Text>
          </View>
        )}
      />
      {/* <Button title="Confirm Settlement" onPress={() => /* Implement settlement logic */} */
    </View>
  );
}

export default SettleExpenses;
