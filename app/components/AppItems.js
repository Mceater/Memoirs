import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import AppColors from "../config/AppColors";
import { useTheme } from '../config/ThemeContext';

function AppItems({ image, title, subtitle, IconComponent, onPress }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
          {subtitle && <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 25,
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 30,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
  },
});

export default AppItems;
