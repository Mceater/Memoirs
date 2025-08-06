import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import AppPicker from "../components/AppPicker";
import AppColors from "../config/AppColors";
import AppTextInput from "../components/AppTextInput";
import * as ImagePicker from 'expo-image-picker';
import AppIcon from "../components/AppIcon";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

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
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();


    if (pickerResult.cancelled === true) {
        return;
    }
    setImage({path: pickerResult.uri});
    console.log(pickerResult);
}


const doErrorCheck = () => {
  setTitleError( title.length>1 ? "": "Please set a valid Memory Title");
  setSubTitleError(subTitle.length>3 ? "": "Please set a Date");
  setCategoryError(category? "": "Please pick a category from the list" );
  setImageError(image? "": "Please pick an image");
  return ((title.length>0) && (subTitle.length>0) && (category) && (image)? true: false)
}
const addMemory = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();

  const Memories = commonData.getMemories(user);
  const memoryID = memories.length+1;
  const newMemory = {
      title: title,
      subtitle: subTitle,
      category: category.label,
      memoryid: memoryID,
      userid: user,
      image: image.path,
  };

  console.log(newMemory);
  commonData.addBook(newMemory);

}



  return (
    <AppScreen style={{ backgroundColor: AppColors.otherColor }}>
      <AppTextInput
        icon="book-open-page-variant"
        placeholder="Memory caption"
        value={title}
        onChangeText={(inputText) => setTitle(inputText)}
      />

      {titleError.length > 0 ? (
        <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
          {titleError}
        </AppText>
      ) : (
        <></>
      )}

      <AppTextInput
        icon="calendar-month"
        placeholder="Date memory captured"
        value={subTitle}
        onChangeText={(inputText) => setSubTitle(inputText)}
      />

      {subTitleError.length > 0 ? (
        <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
          {subTitleError}
        </AppText>
      ) : (
        <></>
      )}

      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        data={categories}
        icon="apps"
        placeholder="Categories"
        numColumns={3}
      />

      {categoryError.length > 0 ? (
        <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
          {categoryError}
        </AppText>
      ) : (
        <></>
      )}

      <TouchableOpacity
        style={styles.imageButton}
        onPress={openImagePickerAsync}
      >
        <AppIcon
          name="camera"
          size={80}
          iconColor={AppColors.otherColor}
          backgroundColor={AppColors.secondaryColor}
        />
        {image && (
          <Image
            source={{ uri: image.path }}
            style={{ height: 80, width: 80, marginLeft: 20 }}
          />
        )}
      </TouchableOpacity>

      {imageError.length > 0 ? (
        <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
          {imageError}
        </AppText>
      ) : (
        <></>
      )}

      <AppButton
        title="Add Memory"
        onPress={() => {
          if (doErrorCheck()) {
            addMemory();
            navigation.navigate("Memories");
          }
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});

export default Collections;
