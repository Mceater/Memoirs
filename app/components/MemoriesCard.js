import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function MemoriesCard({ category, image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.subtitle}> {subtitle} </Text>
      <Text style={styles.subtitle}> {category} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    borderRadius: 25,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "95%",
    margin: 5,
    borderRadius: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 12,
    paddingLeft: 5,
  },
});

export default MemoriesCard;
