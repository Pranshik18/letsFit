import * as react from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Styles } from './style';
import { assets } from '../../../assets';

interface OnBoardScreenTwo {
    navigation: {
        navigate: (props: any)=>void;
    } 
}

const OnBoardScreenTwo = (props : OnBoardScreenTwo) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View>
                <View style={Styles.imageView}>
                    <Image source={assets.avatarIconTwo} style={Styles.avatarImage1}/>
                </View>
                <View style={Styles.headingTextView}>
                    <Text style={Styles.headingText}>Get Burn</Text>
                    <Text style={Styles.headingDescription}>Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever.</Text>
                </View>
            </View>
                    <TouchableOpacity style={Styles.buttonView} onPress={()=>props.navigation.navigate('onBoardScreenThree')}>
                        <Image source={assets.progress50Button} style={Styles.progressButtonImage}/>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnBoardScreenTwo;