import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from '../config/ThemeContext';

function AppTextInput({ icon, ...otherProps }) {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
      {icon && <MaterialCommunityIcons name={icon} size={22} color={colors.textSecondary} />}
      <TextInput style={[styles.textInput, { color: colors.textPrimary }]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: "center",
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    marginLeft: 12,
    flex: 1,
  },
});
export default AppTextInput;
