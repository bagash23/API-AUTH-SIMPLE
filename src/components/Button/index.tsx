import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonComponentProps} from '../../model';
import {StyleButtonComponent} from './components/StyleButtonComponents';

const ButtonComponent = ({title, type, onPress}: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type !== 'outline'
          ? StyleButtonComponent.container
          : StyleButtonComponent.containerOutline
      }>
      <Text
        style={
          type !== 'outline'
            ? StyleButtonComponent.text
            : StyleButtonComponent.textOutline
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
