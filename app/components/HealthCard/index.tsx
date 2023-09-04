import React from "react";
import {ImageProps, Text, View, Image} from 'react-native';
import { HealthData } from "../../constants/data";
import { Styles } from "./style";
interface HealthCardProps {
    healthData: {
        title: string,
        description: string,
        image: ImageProps,
    }
}
 const HealthCard = (props: HealthCardProps)=>{
    const {title , description, image} = props.healthData;
    console.log(title , description)
    return(
        <View>
            <View style={Styles.HealthCardView}>
                <Image source={image} style={Styles.image} resizeMode="contain"/>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.desc}>{description}</Text>
            </View>
        </View>
    )
}

export default HealthCard;