import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    imageView : {
        width: '100%',
        margin: 0
    },
    avatarImage1: {
        width : 450,
        height : 500
    },
    headingTextView: {
        marginHorizontal : 20,
        paddingHorizontal : 10,
        marginVertical : 20
    },
    headingText: {
        fontSize: 26,
        paddingVertical : 10,
        color: colors.black,
        fontWeight: '700'
    },
    headingDescription: {
        fontSize : 16,
        color: colors.grey,
        fontWeight: '400'
    }
})