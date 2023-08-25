import * as react from 'react';
import { Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { Styles } from './style';
import { assets } from '../../../assets';

interface OnBoardScreenFour {
    navigation: {
        navigate: (props: any)=> void;
    }
}

const OnBoardScreenFour = (props : OnBoardScreenFour) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
        <View>
            <View style={Styles.imageView}>
                <Image source={assets.avatarIconFour} style={Styles.avatarImage1}/>
            </View>
            <View style={Styles.headingTextView}>
                <Text style={Styles.headingText}>Improve Sleep Quality</Text>
                <Text style={Styles.headingDescription}>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning.</Text>
            </View>
        </View>
                <TouchableOpacity style={Styles.buttonView} onPress={()=>props.navigation.navigate('')}>
                    <Image source={assets.progress100Button} style={Styles.progressButtonImage}/>
                </TouchableOpacity>
    </SafeAreaView>
    )
}

export default OnBoardScreenFour;