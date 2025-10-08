import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from "yup";
import { LinearGradient } from 'expo-linear-gradient';

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
        <LinearGradient
            colors={['#000000', '#1a1a1a', '#2d2d2d']}
            style={styles.container}
        >
            <View style={styles.icon}>
                <MaterialCommunityIcons name="camera-plus" size={50} color="#ffffff" />
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
                                    <MaterialCommunityIcons name="account-outline" size={20} color="#ffffff" />
                                    <TextInput 
                                        placeholder='Type in your fullname' 
                                        style={styles.textbox} 
                                        value={values.name}
                                        placeholderTextColor={'#cccccc'}
                                        onBlur={() => setFieldTouched("name")}
                                        onChangeText={handleChange("name")}
                                    />
                                </View>
                                {touched.name && errors.name && (
                                    <Text style={styles.errorText}>{errors.name}</Text>
                                )}
                                <View style={styles.input}>
                                    <MaterialCommunityIcons name="email-outline" size={20} color="#ffffff" />
                                    <TextInput 
                                        placeholder='Type in your email' 
                                        style={styles.textbox} 
                                        value={values.email}
                                        placeholderTextColor={'#cccccc'}
                                        onBlur={() => setFieldTouched("email")}
                                        onChangeText={handleChange("email")}
                                    />
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}
                                <View style={styles.input}>
                                    <MaterialCommunityIcons name="lock-outline" size={20} color="#ffffff" />
                                    <TextInput 
                                        placeholder='Type in your password' 
                                        style={styles.textbox} 
                                        placeholderTextColor={'#cccccc'}
                                        value={values.password}
                                        onBlur={() => setFieldTouched("password")}
                                        onChangeText={handleChange("password")}
                                        secureTextEntry={true}
                                    />
                                </View>
                                {touched.password && errors.password && (
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                )}
                                <Button 
                                    mode="contained" 
                                    onPress={handleSubmit} 
                                    style={styles.button}
                                    buttonColor="#ffffff"
                                    textColor="#000000"
                                >
                                    Register
                                </Button>
                                <Button 
                                    mode="outlined" 
                                    onPress={() => navigation.navigate('Login')} 
                                    style={styles.button}
                                    textColor="#ffffff"
                                    borderColor="#ffffff"
                                >
                                    Login
                                </Button>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    authBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        top: '25%',
        width: '100%',
        padding: 30,
        alignItems: 'flex-start'
    },
    header: {
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 32,
        textTransform: 'uppercase',
        fontWeight: '700',
        fontFamily: 'System',
        color: '#ffffff',
        letterSpacing: 1,
    },
    subTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'System',
        color: '#e0e0e0',
        letterSpacing: 0.5,
    },
    textbox: {
        height: 45,
        margin: 12,
        padding: 12,
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'System',
        fontWeight: '400',
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: '85%',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: 12,
        margin: 10,
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    icon: {
        marginTop: '15%',
        alignItems: 'center'
    },
    errorText: {
        color: '#ff6b6b',
        fontSize: 12,
        fontFamily: 'System',
        fontWeight: '500',
        marginLeft: 10,
        marginBottom: 5,
    },
    button: {
        borderRadius: 25,
        minWidth: 180,
        marginTop: 10,
        paddingVertical: 8,
    },
});

export default Register;