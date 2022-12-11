import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import ToastManager, { Toast } from 'toastify-react-native';
import { useAuth } from '../../context/auth';
import Img from '../../assets/logo.svg';

import { Title, Container, Button, Wrap, Column, Avatar } from './styles';

import { Icon } from '../Icon';

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
          <Title title>{user?.nome}</Title>
        </Column>
        <Avatar source={{ uri: url }} />
      </Wrap>
    </Container>
  );
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    Alert.alert('Aviso', 'Tem certeza que deseja sair? ', [
      {
        text: 'Sim',
        onPress: async () => {
          await signOut();
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  if (user) {
    return (
      <Container>
        <ToastManager duration={2000} style={{ width: 327, height: 56 }} />

        {title === 'Perfil' ? (
          <Wrap style={{ justifyContent: 'space-between' }}>
            <Wrap>
              <Button onPress={() => navigation.goBack()}>
                <Icon
                  name="chevron-left"
                  color={theme.icon.header.primary}
                  onlyIcon
                />
              </Button>
              <Title title>{title}</Title>
            </Wrap>
            <Button
              style={{ backgroundColor: 'transparent' }}
              onPress={handleLogout}
            >
              <Icon name="log-out" color={theme.icon.header.primary} onlyIcon />
            </Button>
          </Wrap>
        ) : (
          <Wrap>
            <Button onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                color={theme.icon.header.primary}
                onlyIcon
              />
            </Button>
            <Title title>{title}</Title>
          </Wrap>
        )}
      </Container>
    );
  }
}
