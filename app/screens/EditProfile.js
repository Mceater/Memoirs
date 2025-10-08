import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import { Button, Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { Image } from 'react-native';
import AppColors from '../config/AppColors';

function EditProfile({ navigation, route }) {
  const [name, setName] = useState(route.params.paramName || '');
  const [email, setEmail] = useState(route.params.paramEmail || '');
  const [image, setImage] = useState(route.params.paramImage);

  const openImagePickerAsync = async () => {
    console.log('Opening image picker for profile...');
    try {
      console.log('Requesting permissions...');
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      console.log('Launching image library...');
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (pickerResult.canceled === true) {
        console.log('Image picker canceled');
        return;
      }
      
      const uri = pickerResult.assets && pickerResult.assets[0] ? pickerResult.assets[0].uri : pickerResult.uri;
      console.log('Profile image selected:', uri);
      setImage({ uri: uri });
    } catch (error) {
      console.log('ImagePicker Error: ', error);
      alert('Error picking image: ' + error.message);
    }
  };

  const handleSave = () => {
    if (name.trim().length < 2) {
      Alert.alert('Error', 'Name must be at least 2 characters long');
      return;
    }

    // Navigate back with updated data
    navigation.navigate('AccountPage', {
      paramName: name.trim(),
      paramEmail: email,
      paramImage: image,
    });
    
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <AppScreen>
      <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Edit Profile</Title>
            
            <View style={styles.imageSection}>
              <View style={styles.imageContainer}>
                <Image 
                  source={image} 
                  style={styles.profileImage} 
                />
              </View>
              <Button 
                mode="outlined" 
                onPress={openImagePickerAsync}
                style={styles.imageButton}
                icon="camera-plus"
              >
                Change Photo
              </Button>
            </View>

            <AppTextInput
              icon="account-outline"
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />

            <AppTextInput
              icon="email-outline"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              editable={false}
            />

            <View style={styles.buttonContainer}>
              <Button 
                mode="contained" 
                onPress={handleSave}
                style={styles.saveButton}
              >
                Save Changes
              </Button>
              
              <Button 
                mode="outlined" 
                onPress={() => navigation.goBack()}
                style={styles.cancelButton}
              >
                Cancel
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: AppColors.primaryColor,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageButton: {
    borderRadius: 20,
    borderColor: AppColors.primaryColor,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 12,
  },
  saveButton: {
    borderRadius: 25,
    paddingVertical: 8,
  },
  cancelButton: {
    borderRadius: 25,
    paddingVertical: 8,
  },
});

export default EditProfile;
