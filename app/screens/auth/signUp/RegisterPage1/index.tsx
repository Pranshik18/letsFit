import * as React from 'react';
import {SafeAreaView,View,Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Styles } from './style';
import { AppTextInput } from '../../../../components/TextInput';
import { assets } from '../../../../assets';
import CheckBox from '@react-native-community/checkbox';
interface CreateAccountPage{

}

const CreateAccountPage = (props: CreateAccountPage)=>{
    const [isChecked , setIsChecked] = React.useState(false);
    return(
        <SafeAreaView style={Styles.mainView}>
            <ScrollView>
            <View>
                <View style={Styles.createAccountView}>
                    <Text style={Styles.createAccountMainText}>Hey there,</Text>
                    <Text style={Styles.createAccountText}>Create an Account</Text>
                </View>
                <View style={Styles.textInputView}>
                    <AppTextInput placeholderName='First Name' icon={assets.profileIcon}/>
                    <AppTextInput placeholderName='Last Name' icon={assets.profileIcon}/>
                    <AppTextInput placeholderName='Email' icon={assets.messageIcon}/>
                    <AppTextInput placeholderName='Password' icon={assets.lockIcon}/>
                </View>
                <View style={Styles.termsConditionsView}>
                    <CheckBox value={isChecked} onValueChange={(newValue)=>setIsChecked(newValue)}/>
                    <Text style={Styles.privacyPolicyText}>By continuing you accept our <Text style={Styles.privacyPolicyUnderLineText}>Privacy Policy</Text> and <Text style={Styles.privacyPolicyUnderLineText}>Term of Use</Text></Text>
                </View>
            </View>
            <View style={Styles.RegisterButtonView}>
                    <TouchableOpacity style={Styles.RegisterButton}>
                        <Text style={Styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
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
                    <Text style={Styles.alreadyAccountText}>Already have an account? <Text style={Styles.loginText}>Login</Text></Text>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default CreateAccountPage;