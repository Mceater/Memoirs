import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import AppPicker from "../components/AppPicker";
import AppColors from "../config/AppColors";
import AppTextInput from "../components/AppTextInput";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import AppIcon from "../components/AppIcon";
import { Button } from 'react-native-paper';
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import { Image } from "react-native";

import { TouchableOpacity, StyleSheet, View } from "react-native";



const categories = [
  {
    label: "Family & Friends",
    value: 1,
    icon: "home-heart",
    backgroundColor: AppColors.secondaryColor,
  },
  {
    label: "Places",
    value: 2,
    icon: "airplane-takeoff",
    backgroundColor: AppColors.secondaryColor,
  },
];

function Collections({ navigation }) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [category, setCategory] = useState(null);
  const [categoryText, setCategoryText] = useState("");
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    console.log('Image picker button pressed');
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access media library is required!");
        return;
      }

      // Use Expo ImagePicker on all platforms to avoid native cropper issues
      const mediaType = ImagePicker?.MediaType?.Images;
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: mediaType ? mediaType : undefined,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (pickerResult.canceled === true) {
        console.log('Image picker canceled');
        return;
      }

      const uri = pickerResult.assets && pickerResult.assets[0] ? pickerResult.assets[0].uri : pickerResult.uri;
      if (!uri) {
        console.log('No URI returned from picker');
        return;
      }
      setImage({ path: uri });
      console.log('Selected image URI:', uri);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
      alert('Error picking image: ' + (error?.message || String(error)));
    }
  }


const doErrorCheck = () => {
  setTitleError( title.length>1 ? "": "Please set a valid Memory Title");
  setSubTitleError(subTitle.length>3 ? "": "Please set a Date");
  setCategoryError((category || categoryText.trim().length>0)? "": "Please select or type a category" );
  setImageError(image? "": "Please pick an image");
  return ((title.length>0) && (subTitle.length>0) && ((category) || (categoryText.trim().length>0)) && (image)? true: false)
}
const addMemory = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();

  const userMemories = commonData.getMemories(user);
  const memoryID = userMemories.length + 1;
  const newMemory = {
      title: title,
      subtitle: subTitle,
      category: category ? category.label : categoryText.trim(),
      memoryid: memoryID,
      userid: user,
      image: image.path,
  };

  console.log('Adding memory:', newMemory);
  commonData.addMemories(newMemory);
  console.log('Memory added successfully');
}



  return (
    <AppScreen style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputSection}>
      <AppTextInput
        icon="text-box-outline"
        placeholder="Memory caption"
        value={title}
        onChangeText={(inputText) => setTitle(inputText)}
      />

          {titleError.length > 0 && (
            <AppText style={styles.errorText}>
          {titleError}
        </AppText>
      )}
        </View>

        <View style={styles.inputSection}>
          <TouchableOpacity onPress={() => setShowDate(true)}>
      <AppTextInput
        icon="calendar-plus"
        placeholder="Date memory captured"
              value={subTitle || date.toDateString()}
              editable={false}
            />
          </TouchableOpacity>
          
          {showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDate(false);
                if (selectedDate) {
                  setDate(selectedDate);
                  setSubTitle(selectedDate.toDateString());
                }
              }}
            />
          )}

          {subTitleError.length > 0 && (
            <AppText style={styles.errorText}>
          {subTitleError}
        </AppText>
      )}
        </View>

        <View style={styles.inputSection}>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        data={categories}
        icon="tag-multiple"
        placeholder="Categories"
            allowCustom={true}
            onCustomSubmit={(item) => setCategory(item)}
      />

          {categoryError.length > 0 && (
            <AppText style={styles.errorText}>
          {categoryError}
        </AppText>
      )}
        </View>

        <View style={styles.imageSection}>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={openImagePickerAsync}
      >
        <AppIcon
          name="camera-plus"
          size={80}
          iconColor={AppColors.otherColor}
          backgroundColor={AppColors.secondaryColor}
        />
        {image && (
          <Image
            source={{ uri: image.path }}
                style={styles.previewImage}
          />
        )}
      </TouchableOpacity>

          {imageError.length > 0 && (
            <AppText style={styles.errorText}>
          {imageError}
        </AppText>
      )}
        </View>

        <View style={styles.buttonSection}>
          <Button 
            mode="contained" 
        onPress={() => {
          if (doErrorCheck()) {
            addMemory();
            navigation.navigate("Memories");
          }
        }}
            style={styles.addButton}
            labelStyle={styles.buttonLabel}
            accessibilityLabel="Add memory to collection"
            accessibilityRole="button"
          >
            Add Memory
          </Button>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.otherColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  inputSection: {
    marginBottom: 20,
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    borderStyle: 'dashed',
  },
  previewImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginLeft: 20,
    resizeMode: 'cover',
  },
  addButton: {
    borderRadius: 25,
    minWidth: 200,
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    marginTop: 5,
    marginLeft: 10,
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Collections;
