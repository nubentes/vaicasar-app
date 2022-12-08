import React from 'react';
import { ViewStyle } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

interface IconProps {
  name: string;
  color: string;
  style?: ViewStyle;
  onlyIcon?: boolean;
  iconButton?: boolean;
}

export function Icon({ name, color, style, onlyIcon, iconButton }: IconProps) {
  if (iconButton) {
    return <FontAwesomeIcon name={name} size={24} color={color} />;
  }

  if (onlyIcon) {
    return <FeatherIcon name={name} size={24} color={color} />;
  }

  if (!onlyIcon) {
    return (
      <Container style={style}>
        <FeatherIcon name={name} size={24} color={color} />
      </Container>
    );
  }
}
