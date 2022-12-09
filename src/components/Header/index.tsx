import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useAuth } from '../../context/auth';

import { Title, Container, Button, Wrap, Column } from './styles';

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { user } = useAuth();

  if (user) {
    return (
      <Container>
        {route.name === 'Principal' ? (
          <Column>
            <Title>Bem vindo</Title>
            <Title title="Gabriel Porto">Gabriel Porto</Title>
          </Column>
        ) : (
          <Wrap>
            <Button onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={theme.icon.size}
                color={theme.icon.header.primary}
              />
            </Button>
            <Title title={title}>{title}</Title>
          </Wrap>
        )}
      </Container>
    );
  }
}
