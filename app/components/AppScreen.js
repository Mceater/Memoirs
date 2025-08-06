import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

function AppScreen({ children, style }) {
  return (
    <ImageBackground
      source={require("../assets/baw.jpg")}
      blurRadius={2}
      style={styles.background}
    >
      <View style={styles.icon}></View>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  icon: {
    marginTop: "15%",
    alignItems: "center",
  },
});

export default AppScreen;
