import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        color: theme.colors.heading,
        flex: 1,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        height: 48,
        marginRight: 4,
        textAlign: 'center',
        width: 48,
    }
});