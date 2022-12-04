import React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components';
import { Icon } from '../Icon';

import { Container, DataInput } from './styles';

export interface InputProps {
  value: string;
  onChangeText: (value: string) => void;
  editable?: boolean | undefined;
  style?: ViewStyle;
  icon?: string;
  placeholder?: string;
}

export function Input({
  value,
  onChangeText,
  editable = false,
  style,
  placeholder,
  icon,
}: InputProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      {icon ? <Icon name={icon} color={theme.icon.input.primary} /> : 0}

      <DataInput
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text: string) => onChangeText(text)}
        editable={editable}
        style={style}
        placeholder={placeholder}
      />
    </Container>
  );
}
