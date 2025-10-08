import React from "react";

import { Text, StyleSheet } from "react-native";
import { useTheme } from '../config/ThemeContext';

function AppText({ style, children, variant = 'body' }) {
  const { colors } = useTheme();

  const variantStyle =
    variant === 'title' ? styles.title :
    variant === 'subtitle' ? styles.subtitle :
    styles.text;

  const colorStyle = {
    color:
      variant === 'title' ? colors.textPrimary :
      variant === 'subtitle' ? colors.textSecondary :
      colors.textPrimary,
  };

  return <Text style={[variantStyle, colorStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    lineHeight: 22,
    marginVertical: 6,
  },
  title: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
    lineHeight: 30,
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '500',
    lineHeight: 20,
    marginVertical: 4,
  }
});

export default AppText;
