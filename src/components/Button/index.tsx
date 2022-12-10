import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Icon } from '../Icon';
import { Label } from '../Label';

import { Container } from './styles';

interface ButtonProps {
  buttonStyle?: ViewStyle | ViewStyle[];
  text?: string;
  textStyle?: TextStyle | TextStyle[];
  iconStyle?: ViewStyle;
  icon?: {
    name: string;
    color: string;
  };
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({
  buttonStyle,
  text,
  textStyle,
  iconStyle,
  icon,
  onPress,
  disabled,
}: ButtonProps): JSX.Element {
  if (icon) {
    return (
      <Container onPress={onPress} style={buttonStyle} disabled={!onPress}>
        <Icon name={icon.name} color={icon.color} style={iconStyle} iconInput />
        <Label text={text} style={textStyle} />
      </Container>
    );
  }

  return (
    <Container onPress={onPress} style={buttonStyle} disabled={disabled}>
      <Label text={text} style={textStyle} />
    </Container>
  );
}
