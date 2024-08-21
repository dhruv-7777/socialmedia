import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { auth } from '../config/firebaseConfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../utils/types'; // Ensure this file exists

type EmailVerifyScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'EmailVerify'>;

interface Props {
  navigation: EmailVerifyScreenNavigationProp;
}

const EmailVerifyScreen: React.FC<Props> = ({ navigation }) => {
  const user = auth.currentUser;

  const checkVerification = async () => {
    await user?.reload();
    if (user?.emailVerified) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Verification Pending', 'Please verify your email before continuing.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please verify your email before continuing.</Text>
      <Button title="I have verified" onPress={checkVerification} color="#28a745" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default EmailVerifyScreen;
