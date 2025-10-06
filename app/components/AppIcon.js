import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function AppIcon({name, size, iconColor = 'black', backgroundColor}) {
    return (
        <View style={{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size= {size*0.8} color = {iconColor}/>
        </View>
    );
}
const styles = StyleSheet.create({
    // Styles can be added here if needed
})

export default AppIcon;