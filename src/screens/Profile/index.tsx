import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ToastManager, { Toast } from 'toastify-react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useAuth } from '../../context/auth';
import { DTOPessoa } from '../../dtos/pessoa';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { Avatar, Container } from './styles';

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
  notification: {
    width: 327,
    height: 56,
  },
});

export function Profile() {
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.nome || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.telefone || '');
  const [password, setPassword] = useState(user?.senha || '');

  const url = 'https://avatars.githubusercontent.com/u/34238796?v=4';

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .email('Email inválido')
          .required('Email obrigatório'),
        // phone: Yup.number().max(11).required('Telefone obrigatório'),
      });

      await schema.validate({ name });

      const userData: DTOPessoa = {
        nome: name,
        email,
        telefone: user.telefone,
        senha: user.senha,
      };

      setUser(userData);

      Toast.success('Informações foram salvas!');
    } catch (error) {
      Toast.error(error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ToastManager duration={2000} style={styles.notification} />

        <Header title="Perfil" />

        <Avatar source={{ uri: url }} />

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
          keyboardType="numeric"
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
          text="Salvar"
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
      </Container>
    </ScrollView>
  );
}
