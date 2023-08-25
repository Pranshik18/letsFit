import * as react from 'react';
import {SafeAreaView,View,Text,TouchableOpacity} from 'react-native'
import { Styles } from './style';
interface WelcomeScreenProps{
    navigation: {
        navigate: (props: any)=> void;
    }
}

export const WelcomeScreen = (props: WelcomeScreenProps)=>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View style={Styles.textView}>
                <View style={Styles.flexTextView}>
                <Text style={Styles.mainHeadingLetsText}>Lets</Text>
                <Text style={Styles.mainHeadingText}>Fit</Text>
                </View>
                <Text style={Styles.mainDescriptionText}>Everybody Can Train</Text>
            </View>
            <View>
                <TouchableOpacity style={Styles.getStartedButton} onPress={()=>props.navigation.navigate('onBoardScreenOne')}>
                    <Text style={Styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}