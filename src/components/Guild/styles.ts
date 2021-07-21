import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 24,
        width: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 4,
    },
    type: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
    }

});