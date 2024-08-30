// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { auth } from '../config/firebaseConfig';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { StackParamList } from '../utils/types';

// type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

// interface Props {
//   navigation: HomeScreenNavigationProp;
// }

// const HomeScreen: React.FC<Props> = ({ navigation }) => {
//   const user = auth.currentUser;

//   const handleLogout = () => {
//     auth.signOut().then(() => {
//       navigation.navigate('SignIn');
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome Mr., {user?.email}</Text>
//       <Button title="Logout" onPress={handleLogout} color="#ff6347" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, View, Text } from 'react-native';
import Dashboard from '../tabScreens/Dashboard';
import SettingsScreen from '../tabScreens/Setting';
import Connection from '../tabScreens/Connection';


function NotificationsScreen() {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Connection" component={Connection} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  </SafeAreaView>
  );
};

export default HomeScreen;
