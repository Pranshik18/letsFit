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
        fontWeight: '800'
    },
    headingDescription: {
        fontSize : 16,
        color: colors.grey,
        fontWeight: '600',
        paddingVertical: 6
    },
    progressButtonImage: {
        height: 80,
        width: 80
    },
    buttonView: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    }
})