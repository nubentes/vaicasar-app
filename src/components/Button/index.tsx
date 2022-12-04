import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Icon } from '../Icon';
import { Label } from '../Label';

import { Container, Content } from './styles';

interface ButtonProps {
  buttonStyle?: ViewStyle | ViewStyle[];
  text: string;
  textStyle: TextStyle | TextStyle[];
  iconStyle?: ViewStyle;
  icon?: {
    name: string;
    color: string;
  };
  onPress?: () => void;
}

export function Button({
  buttonStyle,
  text,
  textStyle,
  iconStyle,
  icon,
  onPress,
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} style={buttonStyle} disabled={!onPress}>
      {icon ? (
        <Content>
          <Icon name={icon.name} color={icon.color} style={iconStyle} />
          <Label text={text} style={textStyle} />
        </Content>
      ) : (
        <Label text={text} style={textStyle} />
      )}
    </Container>
  );
}
