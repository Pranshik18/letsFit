import React from "react";
import {Text, SafeAreaView, View, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import { Styles } from "./style";
import { HealthData } from "../../../../constants/data";
import HealthCard from "../../../../components/HealthCard";
interface UserRegisterInfo {
    navigation: {
        navigate: (props: any)=> void;
    }
}

const renderItem = ({item}: any)=>{
    return(
        <HealthCard healthData={item}/>
    )
}


const UserRegisterInfo = (props : UserRegisterInfo)=>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <ScrollView>
              <View style={Styles.healthTextView}>
                <Text style={Styles.healthHeadingText}>What is your goal?</Text>
                <Text style={Styles.healthDescText}>It will help us to choose a best program for you</Text>
                </View>
                <View>
                    <FlatList data={HealthData} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
                </View>
            </ScrollView>
            <TouchableOpacity style={Styles.confirmButton} onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={Styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )

}

export default UserRegisterInfo;