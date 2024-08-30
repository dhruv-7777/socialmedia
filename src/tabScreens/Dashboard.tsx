import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth, firestore } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../utils/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  const user = auth.currentUser;
  const [userData, setUserData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setUserData(data);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate('SignIn');
    });
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcomeText}>Welcome Mr., {user?.email}</Text>
    //   <Button title="Logout" onPress={handleLogout} color="#ff6347" />
    // </View>
    <View style={styles.container}>
      <Text>Welcome {auth.currentUser?.email}</Text>
      {userData.map((user, index) => (
        <Text key={index}>{user.name}</Text>
      ))}
      <Button title="Logout" onPress={handleLogout} />
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
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Dashboard;