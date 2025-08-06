import React from 'react';
import { StyleSheet, View, Text, ImageBackground,SafeAreaView, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';



export default function Home({navigation}) {

  return (
    <ImageBackground
        source={require("../assets/blackandw2.jpg")}
        style={styles.background}
        
        >
    <SafeAreaView style={styles.safeArea}>
          <View>
            <Text style={styles.header}>Memoirs</Text>
            <Text style={styles.subTitle}>Create new memories</Text>
            <View style={styles.icon}><MaterialCommunityIcons
            name ="camera"
            size={50}
            /></View>
          </View>
    <View style={styles.container}>
      <AppButton title="Login" navigation={navigation} onPress={() => navigation.navigate('Login')}/>
      <AppButton title="Register" navigation={navigation} onPress={() => navigation.navigate('Register')}/>
    </View>
      </SafeAreaView>
      </ImageBackground>
      
  );
}

const styles = StyleSheet.create( {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: AppColors.secondaryColor,
    
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingTop: 80,
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily:'Sans-Serif'
  },
  subTitle: {
    paddingTop: 10,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily:'Sans-Serif'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-evenly',
    width: '100%',
    height: '20%',
    top: '35%'
  },
  icon: {
    marginTop:'30%',
   alignItems: 'center'
  },  
});
