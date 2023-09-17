import React from "react";
import {SafeAreaView, View, Text} from 'react-native';
interface CameraProps{

}

const Camera = (props: CameraProps) =>{
    return(
        <SafeAreaView>
            <View>
                <Text>Camera</Text>
            </View>
        </SafeAreaView>
    )
}

export default Camera;