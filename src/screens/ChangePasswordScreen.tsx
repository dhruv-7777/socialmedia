import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { updatePassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const ChangePasswordScreen: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        Alert.alert('Success', 'Password updated successfully!');
      } else {
        setError('No user is currently signed in.');
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Change Password" onPress={handleChangePassword} color="#007bff" />
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

export default ChangePasswordScreen;
