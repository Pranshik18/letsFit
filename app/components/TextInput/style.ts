import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const Styles = StyleSheet.create({
    TextInput: {
        borderColor: colors.lightBlue,
        borderWidth: 1,
        borderRadius: 16,
        marginVertical: 10,
        paddingLeft: 40,
    },
    icon: {
        position: 'absolute',
        top: 26,
        left: 10,
    }
})