import React from "react";
import {SafeAreaView, View, Text} from 'react-native';
interface ProfileProps{

}

const Profile = (props: ProfileProps) =>{
    return(
        <SafeAreaView>
            <View>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile;