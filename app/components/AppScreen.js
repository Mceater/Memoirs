import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../config/ThemeContext';

function AppScreen({ children, style }) {
  const { colors } = useTheme();
  
  return (
    <LinearGradient
      colors={colors.backgroundGradient}
      style={[styles.background, style]}
    >
      <View style={styles.container}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  }
});

export default AppScreen;
