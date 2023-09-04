import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';
export const Styles = StyleSheet.create({
    HealthCardView : {
        width: 300,
        marginHorizontal: 10,
        backgroundColor: colors.lightBlue,
        paddingVertical: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 18,
        paddingVertical: 10,
        marginTop: 6,
        color: colors.white,
        fontWeight: '700'
    },
    desc: {
        textAlign: 'center',
        width: '80%',
        fontSize: 14,
        justifyContent: 'center',
        color: colors.white
    },
    image: {
        width: 350,
        height: 350,
        alignSelf: 'center'
    }
})