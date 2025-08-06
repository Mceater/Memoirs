import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  button,
} from "react-native";

import AppColors from "../config/AppColors";

function AppItems({ image, title, subtitle, IconComponent, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
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
    color: AppColors.otherColor,
  },
  subtitle: {
    fontWeight: "bold",
    color: AppColors.otherColor,
  },
});

export default AppItems;
