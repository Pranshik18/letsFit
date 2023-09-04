import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        width: 350,
        height: 350
    },
    imageView: {
        alignItems: 'center',
        marginVertical: 30,
    },
    contentView: {
        marginVertical: 20
    },
    userView: {
        alignItems: 'center'
    },
    userNameText: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.black,
        letterSpacing: 0.5
    },
    userNameDesc: {
        fontSize: 14,
        color: colors.grey,
        width: '60%',
        textAlign: 'center',
        marginVertical: 10
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