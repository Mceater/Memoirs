import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { useTheme } from '../config/ThemeContext';


import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Memories from "../screens/Memories";
import TabNav from './TabNav';
import EditProfile from '../screens/EditProfile';
import AppSettings from '../screens/AppSettings';
import HelpSupport from '../screens/HelpSupport';

const AppStack = createStackNavigator();

const userList = [
        {
         id: "user1",
         name:"Bruce Wayne",
         email: "batman@gmail.com",
         password: "1234",
         image: require('../assets/batman.jpg'),
     },
     {
         id: "user2",
         name:"Jack Dorsey",
         email: "jdorsey@gmail.com",
         password: "2345",
         image: require('../assets/Jack.jpg'),
     },

]

const AuthNav = () => {
    const { colors } = useTheme();
    const [users, setUsers] = React.useState(userList);
    return(
    <AppStack.Navigator screenOptions={{
        headerTransparent: true,
        headerStyle: { backgroundColor: 'transparent' },
        headerShadowVisible: false,
        headerTitleStyle: { color: colors.textPrimary },
        headerTintColor: colors.textPrimary,
    }}>
        <AppStack.Screen name='Home' component = {Home} options={{headerShown:false}}/>
        <AppStack.Screen name='Register' options={{headerShown:true, headerBackTitleVisible:false, headerTitle:'Register'}}>
            {(props) => <Register {...props} users={users} setUsers={setUsers} />}
        </AppStack.Screen>
        <AppStack.Screen name='Login' options={{headerShown:true, headerBackTitleVisible:false, headerTitle:'Login'}}>
            {(props) => <Login {...props} users={users} />}
        </AppStack.Screen>
        <AppStack.Screen name='MainApp' component={TabNav} options={{headerShown:false}}/>
        <AppStack.Screen name='Memories' component={Memories} options={{headerShown:false}}/>
        <AppStack.Screen name='EditProfile' component={EditProfile} options={{headerShown:true, headerTitle:'Edit Profile'}}/>
        <AppStack.Screen name='AppSettings' component={AppSettings} options={{headerShown:true, headerTitle:'App Settings'}}/>
        <AppStack.Screen name='HelpSupport' component={HelpSupport} options={{headerShown:true, headerTitle:'Help & Support'}}/>

    </AppStack.Navigator>

    )
    
}

export default AuthNav;