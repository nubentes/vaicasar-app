import React from 'react';
import { KeyboardTypeOptions, StyleSheet, ViewStyle } from 'react-native';
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
  style,
  placeholder,
  placeholderTextColor,
  icon,
  keyboardType,
}: InputProps): JSX.Element {
  return (
    <Container>
      {icon ? (
        <Icon
          name={icon}
          color={theme.icon.input.primary}
          style={styles.icon}
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
      />
    </Container>
  );
}
