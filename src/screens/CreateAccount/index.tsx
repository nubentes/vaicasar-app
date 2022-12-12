import { useNavigation } from '@react-navigation/native';
import ToastManager, { Toast } from 'toastify-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import background from '../../assets/background.png';

import { Container, Form } from './styles';
import { InitialHeader } from '../../components/Header';
import { useAuth } from '../../context/auth';
import { createAccount } from '../../services/user';
import { DTOUsuario } from '../../dtos/usuario';

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

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        // phone: Yup.string()
        //   .min(11, 'Número inválido')
        //   .max(11, 'Número inválido')
        //   .required('Telefone obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate({ name, email, phone, password });

      const params: DTOUsuario = {
        nome: name,
        email,
        telefone: phone,
        senha: password,
      };

      const data: DTOUsuario = await createAccount(params);

      Toast.success('Cadastro criado!');

      if (data) {
        Toast.success('Conta criada com sucesso!');

        navigation.navigate('First', { data });
      }
    } catch (error) {
      Toast.error(error.message);
    }
  };

  return (
    <Container source={background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ToastManager duration={2000} style={styles.notification} />
        <InitialHeader />

        <Form>
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
            keyboardType="email-address"
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
        </Form>
      </ScrollView>
    </Container>
  );
}
