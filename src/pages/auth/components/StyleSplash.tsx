import { StyleSheet } from 'react-native'
import { Fonts, colors } from '../../../utils'

export const StyleSplash = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 117,
        height: 90,
    },
    textSplash: {
        fontSize: 16,        
        fontFamily: Fonts.primary[800],
        color: colors.primary
    }
})