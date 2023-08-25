import * as react from 'react';
import { Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { Styles } from './style';
import { assets } from '../../../assets';

interface OnBoardScreenThree {
    navigation: {
        navigate : (props: any)=>void;
    }
}

const OnBoardScreenThree = (props : OnBoardScreenThree) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View>
                <View style={Styles.imageView}>
                    <Image source={assets.avatarIconThree} style={Styles.avatarImage1}/>
                </View>
                <View style={Styles.headingTextView}>
                    <Text style={Styles.headingText}>Eat Well</Text>
                    <Text style={Styles.headingDescription}>Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun</Text>
                </View>
            </View>
                    <TouchableOpacity style={Styles.buttonView} onPress={()=>props.navigation.navigate('onBoardScreenFour')}>
                        <Image source={assets.progress75Button} style={Styles.progressButtonImage}/>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnBoardScreenThree;