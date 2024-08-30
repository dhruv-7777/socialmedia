import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const settingsOptions = [
    { icon: 'account', label: 'Profile', screen: 'Profile' },
    { icon: 'lock', label: 'Change Password', screen: 'ChangePassword' },
    { icon: 'eye', label: 'Logout', screen: 'Home' },
  ];

  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }} // Replace with actual image URL
        style={styles.profileImage}
      />
      <Text style={styles.headerText}>Settings</Text>
    </View>

    {settingsOptions.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.option}
        onPress={() => navigation.navigate(option.screen)}
      >
        <Icon name={option.icon} size={24} color="#000" style={styles.icon} />
        <Text style={styles.optionText}>{option.label}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    marginRight: 16,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
});

export default SettingsScreen;
