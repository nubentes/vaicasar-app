import React from 'react';
import { ViewStyle } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface IconProps {
  name: string;
  color: string;
  style?: ViewStyle;
  onlyIcon?: boolean;
}

export function Icon({ name, color, style, onlyIcon }: IconProps) {
  return (
    <>
      {!onlyIcon ? (
        <Container style={style}>
          <FeatherIcon name={name} size={24} color={color} />
        </Container>
      ) : (
        <FeatherIcon name={name} size={24} color={color} />
      )}
    </>
  );
}
