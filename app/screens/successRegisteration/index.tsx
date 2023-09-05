import React from "react";
import {SafeAreaView , Text, View, Image, TouchableOpacity} from 'react-native';
import { Styles } from "./style";
import { assets } from "../../assets";

interface SuccessRegisteration {
    navigation: {
        navigate: (prop: any)=>void;
    }
}

const SuccessRegisteration = (props : SuccessRegisteration) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View style={Styles.contentView}>
                <View style={Styles.imageView}>
                    <Image source={assets.groupAvatar} resizeMode="contain" style={Styles.image}/>
                </View>
                <View style={Styles.userView}>
                    <Text style={Styles.userNameText}>Welcome, Stefani</Text>
                    <Text style={Styles.userNameDesc}>You are all set now, let's reach your goals together with us.</Text>
                </View>
            </View>
            <TouchableOpacity style={Styles.confirmButton}>
                <Text style={Styles.confirmButtonText}>Go to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default SuccessRegisteration;