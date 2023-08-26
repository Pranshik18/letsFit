import * as React from 'react';
import { Image, TextInput, View } from 'react-native';
import { Styles } from './style';
interface AppTextInput{
    placeholderName: string,
    icon?: any 
}

export const AppTextInput = (props: AppTextInput) => {
    return(
        <View>
            {props.icon ? <Image source={props.icon} style={Styles.icon}/>: null}
            <TextInput 
            placeholder={props.placeholderName}
            style={Styles.TextInput}/>
        </View>
    )
}