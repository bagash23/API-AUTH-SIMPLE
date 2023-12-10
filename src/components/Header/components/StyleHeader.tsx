import { StyleSheet } from 'react-native'
import { Fonts, colors } from '../../../utils'
export const StyleHeader = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 15,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textHeader: {
        fontSize: 15,
        fontFamily: Fonts.primary[700],
        color: colors.black1
    }
})