import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, Image  } from 'react-native';
import { launchImageLibrary, ImagePickerResponse  } from 'react-native-image-picker';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [additionalName, setAdditionalName] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo', maxWidth: 300, maxHeight: 300 }, (response: ImagePickerResponse) => {
      console.warn("Launch");
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri || null);
      }
    });
  };

  const handleSave = () => {
    // Handle save logic here
    alert('Information saved successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Profile Image</Text>
      <TouchableOpacity onPress={handleImagePicker} style={styles.imagePicker}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.imagePickerText}>Select Image</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.label}>First name*</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        maxLength={50}
      />
      <Text style={styles.charCount}>{firstName.length}/50</Text>

      <Text style={styles.label}>Last name*</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        maxLength={50}
      />
      <Text style={styles.charCount}>{lastName.length}/50</Text>

      <Text style={styles.label}>Add Your Intrested Technology</Text>
      <TextInput
        style={styles.input}
        value={additionalName}
        onChangeText={setAdditionalName}
        maxLength={50}
      />
      <Text style={styles.charCount}>{additionalName.length}/50</Text>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  charCount: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'right',
    marginBottom: 20,
  },
  link: {
    marginBottom: 20,
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    height: 150,
    justifyContent: 'center',
  },
  imagePickerText: {
    fontSize: 16,
    color: '#6c757d',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
});

export default Profile;
