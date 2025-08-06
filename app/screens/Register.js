import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from '../components/AppButton';
import {Formik} from 'formik';
import * as Yup from "yup";

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4).max(8).label("Password"),
    }
);




function Register({navigation, users, setUsers}) {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handlePress = () => {
        alert('User has been successfully created')
    }


    return (
    <ImageBackground
        source={require("../assets/baw.jpg")}
        style={styles.container}
        blurRadius={2}
        >
        <View style={styles.icon}><MaterialCommunityIcons name="camera" size={50}  />
        </View>
        <View style={styles.container}>
            <View style={styles.authBox}>
                <Text style={styles.header}>Join Now</Text>
                <Text style={styles.subTitle}>Create an account to join.</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="human" size={20} />
                    <TextInput placeholder='Type in your fullname' 
                        style={styles.textbox} 
                        value={name}
                        placeholderTextColor ={'#000000'}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="email" size={20} />
                    <TextInput placeholder='Type in your username' 
                        style={styles.textbox} 
                        value={email}
                        placeholderTextColor ={'#000000'}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.input}>
                <MaterialCommunityIcons name="key" size={20} />
                    <TextInput placeholder='Type in your password' 
                        style={styles.textbox} 
                        placeholderTextColor ={'#000000'}
                        onChangeText={text => setPassword(text)}
                        value={password} secureTextEntry={true}
                    />
                </View>
                <AppButton title="Register" onPress={handlePress}/>
                <AppButton title="Login" navigation={navigation} onPress={() => navigation.navigate('Login')}/>

            </View>
        </View>
 
        
    </ImageBackground>
    );
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        height: '100%',
        width: '100%',

    },
    authBox: {
        
        display: 'flex',
        flexDirection: 'column',
        height: '40%',
        top: '30%',
        width: '100%',
        padding: 30,
        alignItems: 'flex-start'
    },

    header: {
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily:'Sans-Serif',
      },
      subTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily:'Sans-Serif'
      },
      textbox: {
        height: 40,
        margin: 12,
        padding: 10,
       
      },
      input: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '20%',
          width: '80%',
          borderWidth: 1,
          margin: 10,
          padding: 10,
      },
    icon: {
        marginTop:'15%',
       alignItems: 'center'
      },  
    
})

export default Register;