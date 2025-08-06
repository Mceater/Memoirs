import React from "react";
import { View, StyleSheet } from "react-native";
import AppItems from "../components/AppItems";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";

function AccountPage({ navigation, route }) {
  return (
    <AppScreen>

      <View style={styles.profile}>
        <AppItems
          image={route.params.paramImage}
          title={route.params.paramName}
          subtitle={route.params.paramEmail}
        />
      </View>
      <View style={styles.subcontent}>
        <AppItems
          title="My Memories"
          IconComponent={
            <AppIcon
              name="image"
              size={45}
              backgroundColor={AppColors.primaryColor}
              backgroundOpacity={"70%"}
            />
          }
          navigation={navigation}
          onPress={() => navigation.navigate("Memories")}
        />
      </View>
      <View style={styles.subcontent}>
        <AppItems
          title="More Info"
          IconComponent={
            <AppIcon
              name="book-open-variant"
              size={45}
              backgroundColor={AppColors.primaryColor}
            />
          }
          navigation={navigation}
          onPress={() => navigation.navigate("MoreInfo")}
        />
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  profile: {
    Opacity: "90%",
    backgroundColor: AppColors.secondaryColor,
    marginTop: 70,
    height: 90,
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
  },
  subcontent: {
    backgroundColor: AppColors.secondaryColor,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    marginTop: 15,
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    padding: "5%",
    margin: 10,
    borderRadius: 25,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
});

export default AccountPage;
