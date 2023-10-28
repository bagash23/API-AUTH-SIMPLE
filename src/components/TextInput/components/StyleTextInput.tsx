import {StyleSheet} from 'react-native'
import { Fonts, colors } from '../../../utils'

export const StyleTextInput = StyleSheet.create({
    rowLabel: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        gap: 5
    },
    activeLabel: {
        backgroundColor: colors.red
    },
    textLabel: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: Fonts.primary[700],
        color: colors.black1
    },
    wrapperInput: {
        width: '100%',
        marginTop: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'space-between'
    }
})