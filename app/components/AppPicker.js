import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppColors from "../config/AppColors";
import AppScreen from "./AppScreen";
import AppPickeritem from "./AppPickeritems";

function AppPicker({ data, icon, placeholder, onSelectItem }) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={30} />}
          <AppText style={styles.text}> {placeholder} </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setmodalVisible(false)} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickeritem
                onPress={() => {
                  setmodalVisible(false);
                  onSelectItem(item);
                }}
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryColor,
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    marginVertical: 20,
    width: "100%",
  },
  text: {
    flex: 1,
  },
  seperator: {
    width: "80%",
    height: 2,
    backgroundColor: "black",
    alignSelf: "center",
  },
});
export default AppPicker;
