import { StyleSheet } from 'react-native'
import { Fonts, colors } from '../../../utils'

export const StyleButtonComponent = StyleSheet.create({
    container: {
        paddingVertical: 12,
        backgroundColor: colors.primary,
        borderRadius: 8
    },
    containerOutline: {
        paddingVertical: 12,
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1
    },
    text: {
        fontSize: 15,
        fontFamily: Fonts.primary[800],
        color: colors.white,
        textAlign: 'center'
    },
    textOutline: {
        fontSize: 15,
        fontFamily: Fonts.primary[800],
        color: colors.black1,
        textAlign: 'center'
    },
})