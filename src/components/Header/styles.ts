import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 104,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: getStatusBarHeight(),
        width: '100%',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
    }
});