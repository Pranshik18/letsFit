import {StyleSheet} from 'react-native'
import { colors } from '../../../../constants/colors'
export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageView: {
        marginBottom: 20
    },
    completeProfileView: {
        marginHorizontal: 20,
        alignItems: 'center'
    },
    completeProfileText: {
        fontSize: 24,
        fontWeight: '900',
        color: colors.black,
        letterSpacing: 0.3,
    },
    completeProfileDescText: {
        fontWeight: '400',
        fontSize: 14,
        color: colors.grey,
        marginVertical: 10
    },
    inputFieldView: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    dobField: {
        borderColor: colors.black,
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 16
    },
    dropDownField: {
        backgroundColor: colors.lightGrey,
        marginBottom: 10
    },
    dob: {
         marginVertical: 4,
          borderRadius: 16,
          backgroundColor: colors.lightGrey
        },
    selectButton: {
        backgroundColor: colors.lavendar,
        width: 60,
        padding: 10,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 16
    },
    selectText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '700'
    },
    datePicker: {
        alignSelf: 'center'
    },
    weightView: {
        flexDirection: 'row',
        width: '100%',
    },
    weightImage: {
        height: 46,
        width: 46,
        alignSelf: 'center',
        marginLeft: 10
    },
    weightField: {
         width: '85%',
          borderRadius: 16,
           marginVertical: 10,
        backgroundColor: colors.lightGrey,
        paddingHorizontal: 12
        },
    dobInput: {
        paddingHorizontal: 10
    },
    nextButton: {
        backgroundColor: colors.lightBlue,
        padding: 14,
        alignItems: 'center',
        borderRadius: 16,
        marginVertical: 10
        // flexDirection: 'row',
    },
    nextText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '700',
    }
})