import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useAuth } from '../../context/auth';

import { Title, Container, Button, Wrap } from './styles';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { user } = useAuth();

  // const user = null;
  // const user = '';

  if (!user) {
    return <></>;
  }

  if (user) {
    return (
      <Container>
        {route.name === 'Main' ? (
          <>
            <Title>Bem vindo</Title>
            <Title title={user}>{user}</Title>
          </>
        ) : (
          <Wrap>
            <Button onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={theme.icon.size}
                color={theme.icon.header.primary}
              />
            </Button>
            <Title title={route.name}>{route.name}</Title>
          </Wrap>
        )}
      </Container>
    );
  }
}
