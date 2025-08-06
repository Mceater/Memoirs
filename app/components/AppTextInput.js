import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={22} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    margin: 10,
    width: "90%",
    borderWidth: 1,
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
    placeholderTextColor: "#000000",
    opacity: "50%",
  },
});
export default AppTextInput;
