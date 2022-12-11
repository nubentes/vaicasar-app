import React, { Ref } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';
import theme from '../../styles/theme';
import { Icon } from '../Icon';

import { Container, DataInput } from './styles';

export interface InputProps {
  value: string;
  onChangeText: (value: string) => void;
  editable?: boolean | undefined;
  style?: ViewStyle;
  icon?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  ref?: Ref<T> | undefined;
}

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: theme.input.borderColor,
  },
});

export function Input({
  value,
  onChangeText,
  editable = false,
  containerStyle,
  style,
  placeholder,
  placeholderTextColor,
  icon,
  keyboardType,
  secureTextEntry,
  returnKeyType,
  onSubmitEditing,
  ref,
}: InputProps): JSX.Element {
  return (
    <Container style={containerStyle}>
      {icon ? (
        <Icon
          name={icon}
          color={theme.icon.input.primary}
          style={styles.icon}
          iconInput
        />
      ) : (
        0
      )}

      <DataInput
        value={value}
        autoCorrect={false}
        onChangeText={(text: string) => onChangeText(text)}
        editable={editable}
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
      />
    </Container>
  );
}
