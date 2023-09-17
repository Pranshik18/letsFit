import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Dashboard from '../screens/dashboard';
import Trending from '../screens/trending';
import Search from '../screens/search';
import Camera from '../screens/camera';
import Profile from '../screens/profile';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HomeTabProps {

}
const Tab = createBottomTabNavigator();

export const HomeTab = (props: HomeTabProps) =>{
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
            name='Home'
            component={Dashboard}
            options={{
                tabBarIcon: (tabInfo) => {
                    return (
                      <AntDesign name='home' size={28}/>
                    );
                  },
            }}
            />
            <Tab.Screen name='Trending' component={Trending} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Camera' component={Camera} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}