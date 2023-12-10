import {ReactElement} from 'react';
import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

export interface TextInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  valid?: boolean;
  keyboardType?: KeyboardTypeOptions;
  textInputStyle?: StyleProp<TextStyle>;
  iconRight?: ReactElement;
}
