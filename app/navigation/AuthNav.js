import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';


import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Memories from "../screens/Memories";
import TabNav from './TabNav';

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
    const [users, setUsers] = React.useState(userList);

    const handlePress = () => {
        let old_user_list = users;
        let new_id = old_user_list.length + 1;
        let new_user_list = old_user_list.push({
            id: new_id,
            name: name,
            email: email,
            password: password
        })
        console.log(new_user_list)
        setUsers(old_user_list)
    }
    return(
    <AppStack.Navigator>
        <AppStack.Screen name='Home' component = {Home} options={{headerShown:false}}/>
        <AppStack.Screen name='Register' component={Register} users={users} setUsers={setUsers} options={{headerShown:false}}/>
        <AppStack.Screen name='Login' component={Login} users={users} options={{headerShown:false}}/>
        <AppStack.Screen name='AccountPage' component={TabNav} options={{headerShown:false}}/>
        <AppStack.Screen name='Memories' component={Memories} options={{headerShown:false}}/>

    </AppStack.Navigator>

    )
    
}

export default AuthNav;