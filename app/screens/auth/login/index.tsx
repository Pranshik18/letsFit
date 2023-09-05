import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import { Styles } from "./style";
import { AppTextInput } from "../../../components/TextInput";
import { assets } from "../../../assets";
interface Login {
    navigation: {
        navigate: (prop: any)=>void;
    }
}

const Login = (props: Login) =>{
    return(
    <SafeAreaView style={Styles.mainView}>
        <View>
            <View style={Styles.textView}>
                <Text style={Styles.mainText}>Hey there,</Text>
                <Text style={Styles.descText}>Welcome Back</Text>
            </View>
            <View style={Styles.textInputView}>
                <AppTextInput placeholderName="Email" icon={assets.messageIcon}/>
                <AppTextInput placeholderName="Password" icon={assets.lockIcon}/>
            </View>
            <Text style={Styles.forgotPassText}>Forgot your password?</Text>
        </View>
        <View style={Styles.loginButtonView}>
                <TouchableOpacity style={Styles.loginButton} onPress={()=>props.navigation.navigate('SuccessRegister')}>
                    <Text style={Styles.loginText}>Login</Text>
                </TouchableOpacity>
            <View style={Styles.dividerView}>
                    <Image source={assets.divider} style={Styles.dividerImage}/>
                    <Text style={Styles.orText}>Or</Text>
                    <Image source={assets.divider} style={Styles.dividerImage}/>
                </View>
                <View style={Styles.socialMediaView}>
                    <TouchableOpacity style={Styles.iconButton}>
                        <Image source={assets.googleIcon} style={Styles.socialmediaImages}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.iconButton}>
                        <Image source={assets.facebookIcon} style={Styles.socialmediaImages}/>
                    </TouchableOpacity>
                </View>
                <View style={Styles.alreadyAccountView}>
                    <Text style={Styles.alreadyAccountText}>Don't have an account yet? <Text style={Styles.registerText}>Register</Text></Text>
                </View>
                </View>
    </SafeAreaView>
    )
}

export default Login;