import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { HeaderProps } from "../../model";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from "../../utils";
import { StyleHeader } from "./components/StyleHeader";

const HeaderComponent = ({title, iconType}: HeaderProps) => {
    return (
        <View style={StyleHeader.container} >
            {iconType ? <AntDesign name="arrowleft" size={12} color={colors.black1} /> : undefined}
            <Text style={StyleHeader.textHeader} >{title}</Text>
        </View>
    )
}

export default HeaderComponent;