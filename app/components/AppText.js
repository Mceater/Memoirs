import React from "react";

import { Text, StyleSheet } from "react-native";

function AppText({ style, children }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding:10,
  },
});

export default AppText;
