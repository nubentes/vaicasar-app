import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ToastManager, { Toast } from 'toastify-react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import background from '../../assets/background.png';

import { Container, Form } from './styles';
import { InitialHeader } from '../../components/Header';

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

export function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),

        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate({ email, password });

      const userData: DTOPessoa = {
        email,
        password,
      };
      Toast.success('Login realizado com sucesso!');
      // setUser(userData);

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

      <Form>
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
          value={password}
          onChangeText={setPassword}
          editable
          icon="lock"
          placeholder="Senha"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
          secureTextEntry
        />

        <Button
          saveButton
          buttonStyle={{ marginTop: 24 }}
          text="Entrar"
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
          text="Criar conta"
          textStyle={[
            styles.textStyle,
            {
              textAlign: 'center',
              color: theme.button.text.color.secondary,
              width: '100%',
            },
          ]}
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </Form>
    </Container>
  );
}