import { useNavigation } from '@react-navigation/native';
import ToastManager, { Toast } from 'toastify-react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import background from '../../assets/background.png';

import { Container } from './styles';
import { InitialHeader } from '../../components/Header';
import { useAuth } from '../../context/auth';
import { DTOPessoa } from '../../dtos/pessoa';

const styles = StyleSheet.create({
  input: {
    marginTop: 24,
  },
  textStyle: {
    fontSize: theme.input.text.fontSize,
    fontFamily: theme.input.text.fontFamily,
    color: colors.black,
  },
  notification: {
    width: 327,
    height: 56,
  },
});

export function CreateAccount() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const { setUser } = useAuth();

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        phone: Yup.string()
          .min(11, 'Número inválido')
          .max(11, 'Número inválido')
          .required('Telefone obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate({ name, email, phone, password });

      const userData: DTOPessoa = {
        name,
        email,
        phone,
        password,
      };

      // setUser(userData);

      Toast.success('Cadastro criado!');

      setTimeout(() => {
        navigation.navigate('First');
      }, 2000);
    } catch (error) {
      Toast.error(error.message);
    }
  };

  return (
    <Container source={background}>
      <ToastManager duration={2000} style={styles.notification} />
      <InitialHeader />

      <Input
        value={name}
        onChangeText={setName}
        editable
        icon="mail"
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
      />

      <Button
        saveButton
        buttonStyle={{ marginTop: 24 }}
        text="Criar Conta"
        textStyle={[
          styles.textStyle,
          {
            textAlign: 'center',
            color: theme.button.text.color.primary,
            width: '100%',
          },
        ]}
        onPress={() => handleSave()}
      />

      <Button
        saveButton
        buttonStyle={{
          marginTop: 24,
          backgroundColor: theme.button.background.secondary,
        }}
        text="Voltar"
        textStyle={[
          styles.textStyle,
          {
            textAlign: 'center',
            color: theme.button.text.color.secondary,
            width: '100%',
          },
        ]}
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
}
