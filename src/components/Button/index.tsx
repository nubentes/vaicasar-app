import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Icon } from '../Icon';
import { Label } from '../Label';

import { Container, SaveButton } from './styles';

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
  saveButton?: boolean;
}

export function Button({
  buttonStyle,
  text,
  textStyle,
  iconStyle,
  icon,
  onPress,
  disabled,
  saveButton,
}: ButtonProps): JSX.Element {
  if (icon) {
    return (
      <Container onPress={onPress} style={buttonStyle} disabled={!onPress}>
        <Icon name={icon.name} color={icon.color} style={iconStyle} iconInput />
        <Label text={text} style={textStyle} />
      </Container>
    );
  }

  if (saveButton) {
    return (
      <SaveButton onPress={onPress} style={buttonStyle} disabled={disabled}>
        <Label text={text} style={textStyle} />
      </SaveButton>
    );
  }

  return (
    <Container onPress={onPress} style={buttonStyle} disabled={disabled}>
      <Label text={text} style={textStyle} />
    </Container>
  );
}
