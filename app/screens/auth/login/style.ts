import {StyleSheet} from 'react-native';
import { colors } from '../../../constants/colors';

export const Styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.white,
        flex: 1,
    },
    textView: {
        alignItems: 'center',
        marginVertical: 20
    },
    mainText: {
        color: colors.grey,
        letterSpacing: 0.5,
        fontSize: 16
    },
    descText: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 22,
        letterSpacing: 0.5
    },
    textInputView: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10
    },
    forgotPassText: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 14,
        paddingVertical: 10,
        color: colors.grey
    },
    loginButtonView: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '90%'
    },
    loginButton: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        padding: 14,
        borderRadius: 42,
        elevation: 2
    },
    loginText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '700',
    },
    dividerView: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    dividerImage: {
        top: 8,
    },
    orText: {
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: '500'
    },
    socialMediaView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        marginHorizontal: 20,
    },
    socialmediaImages: {
        height: 50,
        width: 50
    },
    alreadyAccountView: {
        alignItems: 'center',
        marginVertical: 20
    },
    alreadyAccountText: {
        fontSize: 14,
        color: colors.black,
    },
    registerText: {
        color: colors.lavendar,
        fontWeight: '700'
    }
})