import * as react from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Styles } from './style';
import { assets } from '../../../assets';

interface OnBoardScreenOne {

}

const OnBoardScreenOne = (props : OnBoardScreenOne) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View>
                <View style={Styles.imageView}>
                    <Image source={assets.avatarIconOne} style={Styles.avatarImage1}/>
                </View>
                <View style={Styles.headingTextView}>
                    <Text style={Styles.headingText}>Track your goal</Text>
                    <Text style={Styles.headingDescription}>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals.</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={assets.progress25Button}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnBoardScreenOne;