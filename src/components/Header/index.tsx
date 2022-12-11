import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useAuth } from '../../context/auth';
import Img from '../../assets/logo.svg';

import { Title, Container, Button, Wrap, Column, Avatar } from './styles';

interface HeaderProps {
  title?: string;
}

const styles = StyleSheet.create({
  customWrap: {
    justifyContent: 'space-between',
  },
});

export function InitialHeader() {
  return (
    <Container
      style={{
        justifyContent: 'center',
      }}
    >
      <Img width={250} height={170} />
    </Container>
  );
}

export function MainHeader() {
  const { user } = useAuth();
  const url = 'https://avatars.githubusercontent.com/u/34238796?v=4';

  return (
    <Container>
      <Wrap style={styles.customWrap}>
        <Column>
          <Title>Bem vindo</Title>
          <Title title>{user.nome}</Title>
        </Column>
        <Avatar source={{ uri: url }} />
      </Wrap>
    </Container>
  );
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();
  const { user } = useAuth();

  if (user) {
    return (
      <Container>
        <Wrap>
          <Button onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              size={theme.icon.size}
              color={theme.icon.header.primary}
            />
          </Button>
          <Title title>{title}</Title>
        </Wrap>
      </Container>
    );
  }
}
