import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AppIcon from '../components/AppIcon';
import AppColors from "../config/AppColors";

const AppTab = createBottomTabNavigator();

import MoreInfo from "../screens/MoreInfo";
import AccountPage from "../screens/AccountPage";
import Collections from "../screens/Collections";
import Memories from "../screens/Memories";

const TabNav = () => {
  return (
    <AppTab.Navigator>
      <AppTab.Screen name="AccountPage" component={AccountPage} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.primaryColor}/>}}/>
      <AppTab.Screen name="Memories" component={Memories} options={{tabBarIcon: () => <AppIcon size={30} name="image" backgroundColor={AppColors.primaryColor}/>}} /> 
      <AppTab.Screen name="Collections" component={Collections} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColors.primaryColor}/>}}/>
      <AppTab.Screen name="MoreInfo" component={MoreInfo} options={{tabBarIcon: () => <AppIcon size={30} name="book-open-variant" backgroundColor={AppColors.primaryColor}/>}} />
      
    
    </AppTab.Navigator>
  );
};

export default TabNav;
