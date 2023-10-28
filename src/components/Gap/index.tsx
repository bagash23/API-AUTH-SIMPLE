import React from "react";
import {View} from "react-native"

const GapComponent = ({width, height} : {width: number, height: number}) => {
    return <View style={{width: width, height: height}} />;
}
export default GapComponent;