import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from '../components/AppButton';
import {Formik} from 'formik';
import * as Yup from "yup";

const schema = Yup.object().shape(
    {
        name: Yup.string().required().min(2).label("Name"),
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4).max(8).label("Password"),
    }
);




function Register({navigation, users, setUsers}) {
    const handlePress = (values) => {
        const newUser = {
            id: `user${users.length + 1}`,
            name: values.name,
            email: values.email,
            password: values.password,
            image: require("../assets/batman.jpg") // Default image
        };
        setUsers([...users, newUser]);
        alert('User has been successfully created');
        navigation.navigate('Login');
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
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={(values, { resetForm }) => {
                        handlePress(values);
                        resetForm();
                    }}
                    validationSchema={schema}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        setFieldTouched,
                        touched,
                    }) => (
                        <>
                            <View style={styles.input}>
                                <MaterialCommunityIcons name="human" size={20} />
                                <TextInput 
                                    placeholder='Type in your fullname' 
                                    style={styles.textbox} 
                                    value={values.name}
                                    placeholderTextColor={'#000000'}
                                    onBlur={() => setFieldTouched("name")}
                                    onChangeText={handleChange("name")}
                                />
                            </View>
                            {touched.name && errors.name && (
                                <Text style={styles.errorText}>{errors.name}</Text>
                            )}
                            <View style={styles.input}>
                                <MaterialCommunityIcons name="email" size={20} />
                                <TextInput 
                                    placeholder='Type in your email' 
                                    style={styles.textbox} 
                                    value={values.email}
                                    placeholderTextColor={'#000000'}
                                    onBlur={() => setFieldTouched("email")}
                                    onChangeText={handleChange("email")}
                                />
                            </View>
                            {touched.email && errors.email && (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            )}
                            <View style={styles.input}>
                                <MaterialCommunityIcons name="key" size={20} />
                                <TextInput 
                                    placeholder='Type in your password' 
                                    style={styles.textbox} 
                                    placeholderTextColor={'#000000'}
                                    value={values.password}
                                    onBlur={() => setFieldTouched("password")}
                                    onChangeText={handleChange("password")}
                                    secureTextEntry={true}
                                />
                            </View>
                            {touched.password && errors.password && (
                                <Text style={styles.errorText}>{errors.password}</Text>
                            )}
                            <AppButton title="Register" onPress={handleSubmit}/>
                            <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
                        </>
                    )}
                </Formik>
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
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
    },
    
})

export default Register;