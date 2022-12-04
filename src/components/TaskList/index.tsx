import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { TaskProps, useTask } from '../../context/list';
import 'moment/locale/pt-br';
import { Item } from '../Item';

import { Container, Title } from './styles';
import { RootStackParamList } from '../../routes/app.stack.routes';
import { Button } from '../Button';
import theme from '../../styles/theme';
import { Label } from '../Label';

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

export function TaskList(): JSX.Element {
  const { list, loading } = useTask();
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

  const taskItem = (item: TaskProps) => {
    return <Item key={item.id} params={item} />;
  };

  return (
    <Container>
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

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        list.tarefas?.map(task => {
          return taskItem(task);
        })
      )}
    </Container>
  );
}
