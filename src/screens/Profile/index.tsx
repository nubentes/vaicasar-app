import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useAuth } from '../../context/auth';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

import { Container } from './styles';

const styles = StyleSheet.create({
  input: {
    marginTop: 24,
  },
  button: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: theme.input.borderColor,
    backgroundColor: theme.input.background,
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: theme.input.text.fontSize,
    fontFamily: theme.input.text.fontFamily,
    color: colors.black,
  },
  icon: {
    borderWidth: 0,
    borderColor: theme.button.border.primary,
  },
});

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user?.nome || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.telefone || '');
  const [password, setPassword] = useState(user?.senha || '');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header title="Perfil" />

        <Input
          value={name}
          onChangeText={setName}
          editable
          icon="user"
          placeholder="Nome"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          editable
          icon="mail"
          placeholder="Email"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
        />

        <Input
          value={phone}
          onChangeText={setPhone}
          editable
          icon="phone"
          placeholder="Telefone"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
        />

        <Input
          value={password}
          onChangeText={setPassword}
          editable
          icon="lock"
          placeholder="Senha"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
          secureTextEntry
        />
      </Container>
    </ScrollView>
  );
}
