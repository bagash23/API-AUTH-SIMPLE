import React from "react";
import { StyleSheet, View } from 'react-native'
import { LayoutProps } from "../../model";
import HeaderComponent from "../Header";
import { colors } from "../../utils";

const MainLayout = ({ headShow, children, title }: LayoutProps) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }} >
            {headShow ? <HeaderComponent title={title} iconType={headShow} />: undefined}
            {children}
        </View>
    )
}
export default MainLayout;