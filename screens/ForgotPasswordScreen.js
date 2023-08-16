import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Add password reset logic here
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
}

export default ForgotPasswordScreen;
