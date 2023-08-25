import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'
export const Styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    textView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    mainHeadingText: {
        fontSize: 44,
        color: colors.lavendar,
        fontWeight: '800',
    },
    flexTextView: {
        flexDirection: 'row'
    },
    mainHeadingLetsText:{
        fontSize: 44,
        color: colors.black,
        fontWeight: '800'
    },
    mainDescriptionText: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.grey
    },
    getStartedButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: colors.lightBlue,
        padding: 18,
        borderRadius: 42
    },
    getStartedText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        color: colors.white
    }
})