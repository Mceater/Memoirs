import React from 'react';
import { Text, TouchableOpacity , StyleSheet, View, button} from 'react-native-web';
import { useNavigation } from  '@react-navigation/native';
import AppColors from '../config/AppColors';

function AppButton({title, onPress}) {


    return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.button }>
               <Text style={styles.text}> {title} </Text>
           </View>
       </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    button:{
        backgroundColor: AppColors.secondaryColor,
        justifyContent: 'center',
        opacity:'90%',
        width : '100px',
        height: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        padding: 18,
        borderRadius:25,
    },
    text:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        }
})

export default AppButton;
 
 