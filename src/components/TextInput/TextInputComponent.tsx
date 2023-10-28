import React from "react";
import { Text, View, TextInput } from 'react-native'
import { TextInputProps } from "../../model";
import { StyleTextInput } from "./components/StyleTextInput";

const TextInputComponent = ({
    label,
    secureTextEntry,
    placeholder,
    onChangeText,
    value,
    multiline,
    valid,
    keyboardType,
    textInputStyle,
    iconRight
}:TextInputProps) => {
    return (
        <>
            {valid ? (
                <View>
                    <View style={StyleTextInput.rowLabel} >
                        <Text style={StyleTextInput.activeLabel}>*</Text>
                        <Text style={StyleTextInput.textLabel} >{label}</Text>
                    </View>
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        multiline={multiline}
                        style={textInputStyle}
                    />
                </View>
            ) : (
                <View>
                    <Text style={StyleTextInput.textLabel} >{label}</Text>
                    <View style={StyleTextInput.wrapperInput} >
                        <TextInput
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            secureTextEntry={secureTextEntry}
                            multiline={multiline}
                            style={textInputStyle}
                        />
                        {iconRight}
                    </View>
                </View>
            )}
        </>
    )
}

export default TextInputComponent;