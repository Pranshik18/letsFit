import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    welcomeView: {
        flexDirection: 'row',
    },
    welcomeBackText: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 20
    },
    welcome: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.grey
    },
    welcomeUserText: {
        fontSize: 22,
        color: colors.black,
        fontWeight: '700',
        paddingVertical: 6
    },
    notificationBell: {
        position: 'absolute',
        right: 10,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bmiView: {
        backgroundColor: colors.lightBlue,
        marginHorizontal: 20,
        borderRadius: 16,
        flexDirection: 'row',
        paddingVertical: 10
    },
    bmiText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '600',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    bmiTextView: {
        flexDirection: 'column',
        width: '60%'
    },
    bmiUserText: {
        paddingHorizontal: 20,
        color: colors.white,
        fontWeight: '400'
    },
    viewMoreButton: {
        backgroundColor: colors.lavendar,
        width: '44%',
        marginVertical: 20,
        borderRadius: 42,
        marginHorizontal: 30
    },
    viewMoreText: {
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center',
        padding: 8,
        fontSize: 12
    },
    pieChartView: {
        width: '40%'
    },
    targetView: {
        backgroundColor: colors.lightBlue,
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 16,
        flexDirection: 'row',
        borderRadius: 10
    },
    targetTextView: {
        width: '80%'
    },
    todayTargetText: {
        color: colors.white,
        paddingHorizontal: 8,
        fontSize: 14,
        fontWeight: '400',
        paddingVertical: 4
    },
    checkButton: {
        backgroundColor: colors.lavendar,
        width: '70%',
        borderRadius: 42
    },
    buttonView: {
        width: '25%',
        alignItems: 'center'
    },
    checkText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
        paddingVertical: 4
    },
    activityStatusView: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    activityStatusText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black
    },
    heartUserText: {
        paddingHorizontal: 20,
        color: colors.grey,
        fontWeight: '400',
        fontSize: 16
    },
    heartRateView: {
        position: 'absolute',
        zIndex: 9999999999,
        top: 10,
        left: 50
    }
})