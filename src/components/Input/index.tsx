import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
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
        autoCapitalize="none"
        onChangeText={(text: string) => onChangeText(text)}
        editable={editable}
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </Container>
  );
}
