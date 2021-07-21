import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        color: theme.colors.heading,
        flex: 1,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        height: 95,
        marginRight: 4,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top',
        width: '100%',
    }
});