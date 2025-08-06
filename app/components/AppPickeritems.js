import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppPickeritem({ onPress, label, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name={icon}
        iconColor="white"
        backgroundColor={backgroundColor}
        size={50}
        padding={15}
      />
      <AppText> {label} </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "70%",
    alignItems:'center'
  },
});

export default AppPickeritem;
