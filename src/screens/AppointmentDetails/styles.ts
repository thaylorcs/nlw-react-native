import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: 234,
        width: '100%',
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 30,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.text400,
        lineHeight: 21,
    },
    members: {
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
});