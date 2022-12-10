import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import { MainHeader } from '../../components/Header';
import { Label } from '../../components/Label';
import { TaskList } from '../../components/TaskList';
import { useAuth } from '../../context/auth';
import { useTask } from '../../context/list';
import { RootStackParamList } from '../../routes/app.tasks.routes';
import theme from '../../styles/theme';
import { First } from '../First';

import { Container, Title } from './styles';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: theme.button.background.secondary,
    borderWidth: 1,
    borderColor: theme.button.border.primary,
  },

  textStyle: {
    fontSize: theme.button.text.fontSize,
    fontFamily: theme.card.text.fontFamily.semi_bold,
    color: theme.button.text.color.secondary,
  },

  counter: {
    fontSize: theme.card.text.fontSize.subtitle,
    fontFamily: theme.card.text.fontFamily.semi_bold,
    color: theme.card.text.color.grey_dark,
  },

  icon: {
    borderWidth: 1,
    borderColor: theme.button.border.primary,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});
export function Home() {
  const { list } = useTask();
  const { user } = useAuth();
  const navigation = useNavigation<RootStackParamList>();

  let done = 0;

  if (list) {
    list?.tarefas?.forEach(element => {
      if (element.dataConclusao) {
        done += 1;
      }
    });
  }

  const handleAdd = () => {
    navigation.navigate('Tarefa', {
      task: {},
      type: 'add',
    });
  };

  if (user) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <MainHeader />
          <Counter />

          <Title>
            <Label text="Minhas Tarefas" bigLabel />

            <Label
              text={`${done}/${list?.tarefas?.length || 0}`}
              style={styles.counter}
            />
          </Title>

          <Button
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            iconStyle={styles.icon}
            icon={{ name: 'plus', color: theme.button.background.primary }}
            text="Adicionar nova tarefa"
            onPress={() => handleAdd()}
          />

          <TaskList />
        </Container>
      </ScrollView>
    );
  }
  return <First />;
}
