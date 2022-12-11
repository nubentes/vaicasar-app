import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import { MainHeader } from '../../components/Header';
import { Label } from '../../components/Label';
import { TaskList } from '../../components/TaskList';
import { useAuth } from '../../context/auth';
import { DTOCronograma } from '../../dtos/cronograma';
import { RootStackParamList } from '../../routes/app.tasks.routes';
import { getTimeline } from '../../services/timeline';
import colors from '../../styles/colors';
import theme from '../../styles/theme';
import { First } from '../First';

import { Container, Loading, Title } from './styles';

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
    borderWidth: 0,
    borderColor: theme.button.border.primary,
  },
});
export function Home() {
  const { list, setList, loading, setLoading } = useAuth();
  const { user } = useAuth();
  const navigation = useNavigation<RootStackParamList>();

  let done = 0;

  const handleAdd = () => {
    navigation.navigate('Tarefa', {
      task: {},
      type: 'add',
    });
  };

  const loadList = async () => {
    try {
      const isTimelinePresent: DTOCronograma = await getTimeline(user);

      if (isTimelinePresent) {
        setList(isTimelinePresent);

        list?.tarefas?.forEach(element => {
          if (element.dataConclusao) {
            done += 1;
          }
        });
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    loadList();
  }, []);

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

        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color={colors.pink_red} />
          </Loading>
        ) : (
          <TaskList />
        )}
      </Container>
    </ScrollView>
  );

  // return <First />;
}
