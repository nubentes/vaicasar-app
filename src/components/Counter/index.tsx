import React from 'react';
import { StyleSheet } from 'react-native';
import { useAuth } from '../../context/auth';

import theme from '../../styles/theme';
import icons from '../../utils/icons';
import { Icon } from '../Icon';
import { Label } from '../Label';

import { Container, Wrap } from './styles';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: theme.button.background.secondary,
  },
  textStyle: {
    fontFamily: theme.card.text.fontFamily.bold,
    color: theme.card.text.color.white,
    fontSize: theme.card.text.fontSize.subtitle,
  },
});

export function Counter() {
  const { list } = useAuth();

  return (
    <Container>
      <Icon name={icons.heart} color={theme.icon.card.primary} onlyIcon />
      <Wrap>
        <Label
          text="245 dias"
          style={[
            styles.textStyle,
            { fontSize: theme.card.text.fontSize.bigTitle },
          ]}
        />
        <Label text={list?.dataPrevista} style={styles.textStyle} />
        <Label text="dia do casamento" style={styles.textStyle} />
      </Wrap>

      <Icon name={icons.heart} color={theme.icon.card.primary} onlyIcon />
    </Container>
  );
}
