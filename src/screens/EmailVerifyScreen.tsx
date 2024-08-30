import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth, firestore } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';


type EmailVerifyScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'EmailVerify'>;

interface Props {
  navigation: EmailVerifyScreenNavigationProp;
}

const EmailVerifyScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const checkVerification = async () => {
      const user = auth.currentUser;
      await user?.reload(); 

      if (user?.emailVerified) {
        const userTempData = await AsyncStorage.getItem('userTempData');
        if (userTempData) {
          const { uid, firstName, lastName, email, password } = JSON.parse(userTempData);
          
          await addDoc(collection(firestore, 'users'), {
            uid,
            firstName,
            lastName,
            email,
            password,
          });
          await AsyncStorage.removeItem('userTempData');

          navigation.navigate('Home');
        }
      }
    };

    checkVerification();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please verify your email</Text>
      <Button title="Check Verification" onPress={() => navigation.navigate('Home')} />
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
});

export default EmailVerifyScreen;
