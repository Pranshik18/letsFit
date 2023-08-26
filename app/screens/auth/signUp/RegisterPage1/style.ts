import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants/colors';

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white
    },
    createAccountView: {
        alignItems: 'center',
        marginVertical: 20
    },
    createAccountMainText: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.black,
        paddingVertical: 4
    },
    createAccountText: {
        fontSize: 22,
        fontWeight: '800',
        color: colors.black
    },
    textInputView: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    termsConditionsView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 4
    },
    privacyPolicyText: {
        marginRight: 20,
        marginLeft: 6
    },
    privacyPolicyUnderLineText: {
        textDecorationLine: 'underline',
        fontWeight: '500',
    },
    RegisterButtonView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 100
    },
    RegisterButton: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        padding: 14,
        borderRadius: 42,
        elevation: 2
    },
    registerText: {
        fontSize: 18,
        color: colors.white
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
    alreadyAccountView: {
        alignItems: 'center',
        marginVertical: 20
    },
    alreadyAccountText: {
        fontSize: 14,
        color: colors.black,
    },
    loginText: {
        color: colors.lavendar,
        fontWeight: '600',
    },
    socialmediaImages: {
        height: 50,
        width: 50
    }
})