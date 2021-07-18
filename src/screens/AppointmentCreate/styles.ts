import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
    },
    form: {
      paddingHorizontal: 24,
      marginTop: 32,
    }, 
    select: {
        alignItems: 'center',
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        height: 68,
        overflow: 'hidden',
        paddingRight: 25,
        width: '100%',
    },
    selectBody: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
        borderWidth: 1,
        height: 68,
        width: 64,
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
    },
    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },
    footer: {
        marginVertical: 20,
        marginBottom: 60,
    }
});