import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    nameStatus: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
    },
    status: {
        alignItems: 'center',
        flexDirection: 'row',
    }, 
    bulletStatus: {
        borderRadius: 4,
        height: 8,
        marginRight: 9,
        width: 8,
    }
    
});