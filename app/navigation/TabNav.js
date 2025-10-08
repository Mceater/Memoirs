import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import AppIcon from '../components/AppIcon';
import AppColors from "../config/AppColors";
import { Button } from 'react-native-paper';
import DataManager from "../config/DataManager";

const AppTab = createBottomTabNavigator();

import MoreInfo from "../screens/MoreInfo";
import AccountPage from "../screens/AccountPage";
import Memories from "../screens/Memories";
import Collections from "../screens/Collections";

const MemoriesStack = createStackNavigator();

function MemoriesStackNavigator() {
  return (
    <MemoriesStack.Navigator screenOptions={{ headerShown: false }}>
      <MemoriesStack.Screen name="Memories" component={Memories} />
      <MemoriesStack.Screen name="Collections" component={Collections} />
    </MemoriesStack.Navigator>
  );
}

const TabNav = () => {
  return (
    <AppTab.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerStyle: { backgroundColor: 'transparent' },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderTopWidth: 1,
          borderTopColor: 'rgba(0,0,0,0.1)',
          position: 'absolute',
          paddingBottom: 20,
          paddingTop: 10,
          height: 80,
        },
        tabBarBackground: () => null,
        headerRight: () => (
          <Button onPress={() => {
            const dm = DataManager.getInstance();
            dm.setUserID("");
            navigation.getParent()?.navigate('Home');
          }} style={{ marginRight: 12 }}>
            Logout
          </Button>
        ),
      })}
    >
      <AppTab.Screen name="AccountPage" component={AccountPage} options={{tabBarIcon: () => <AppIcon size={30} name="account-circle" backgroundColor={AppColors.primaryColor}/>}}/>
      <AppTab.Screen name="MemoriesTab" component={MemoriesStackNavigator} options={{tabBarLabel: 'Memories', tabBarIcon: () => <AppIcon size={30} name="image-multiple" backgroundColor={AppColors.primaryColor}/>}} /> 
      <AppTab.Screen name="MoreInfo" component={MoreInfo} options={{tabBarIcon: () => <AppIcon size={30} name="information-outline" backgroundColor={AppColors.primaryColor}/>}} />
      
    
    </AppTab.Navigator>
  );
};

export default TabNav;
