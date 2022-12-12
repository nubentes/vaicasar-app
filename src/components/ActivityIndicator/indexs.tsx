import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';

import { Container } from './styles';

export function LoadingIndicator() {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.pink_red} />
    </Container>
  );
}
