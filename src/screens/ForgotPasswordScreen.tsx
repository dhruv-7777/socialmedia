import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent!');
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleForgotPassword} color="#007bff" />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
