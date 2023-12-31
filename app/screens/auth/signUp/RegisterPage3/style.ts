import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants/colors';
export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    healthTextView: {
        alignItems: 'center',
        marginVertical: 20
    },
    healthHeadingText: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.black,
        letterSpacing: 0.6,
        paddingVertical: 10
    },
    healthDescText: {
        width: '60%',
        textAlign: 'center',
        color: colors.grey,
        letterSpacing: 0.5
    },
    confirmButton: {
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        padding: 14,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 16,
        bottom: 14
    },
    confirmButtonText: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 16
    }
})