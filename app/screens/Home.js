import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AppColors from '../config/AppColors';

export default function Home({navigation}) {
  return (
    <LinearGradient
      colors={['#000000', '#1a1a1a', '#2d2d2d']}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.header}>Memoirs</Text>
          <Text style={styles.subTitle}>Create new memories</Text>
          <View style={styles.icon}>
                    <MaterialCommunityIcons name="camera-plus" size={50} color="#ffffff" />
          </View>
        </View>
        <View style={styles.container}>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Login')} 
            style={styles.button}
            buttonColor="#ffffff"
            textColor="#000000"
          >
            Login
          </Button>
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('Register')} 
            style={styles.button}
            textColor="#ffffff"
            borderColor="#ffffff"
          >
            Register
          </Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingTop: 80,
    fontSize: 42,
    textTransform: 'uppercase',
    fontWeight: '800',
    fontFamily: 'System',
    color: '#ffffff',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subTitle: {
    paddingTop: 15,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'System',
    color: '#e0e0e0',
    letterSpacing: 1,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 120,
    top: '35%'
  },
  icon: {
    marginTop: '30%',
    alignItems: 'center'
  },
  button: {
    borderRadius: 24,
    minWidth: 160,
    marginVertical: 5,
  },
});
