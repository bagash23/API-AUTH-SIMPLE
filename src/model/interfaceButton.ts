import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonComponentProps{
    title: String;
    type: string;
    onPress: () => void
}