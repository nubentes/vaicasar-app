import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import { LoadingIndicator } from '../../components/ActivityIndicator/indexs';
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
    borderWidth: 0,
    borderColor: theme.button.border.primary,
  },

  notification: {
    width: 327,
    height: 56,
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

  const loadList = useCallback(async () => {
    try {
      const isTimelinePresent: DTOCronograma = await getTimeline(user);

      const v1 = moment();
      const v2 = moment(isTimelinePresent.dataPrevista);

      const time = v2.diff(v1, 'days');

      const convertDate = isTimelinePresent.dataPrevista
        .split('-')
        .reverse()
        .join('/');

      const formatDates = isTimelinePresent.tarefas.map(item => {
        const formattedDate: string = item.dataPrevista
          ? moment(item.dataPrevista).format('L')
          : moment().format('L');

        item.dataPrevista = {
          dateString: formattedDate,
          day: Number(moment(item.dataPrevista).format('D')),
          month: Number(moment(item.dataPrevista).format('M')),
          year: Number(moment(item.dataPrevista).format('Y')),
          timestamp: Number(moment(item.dataPrevista).unix()),
        };

        return item;
      });

      const formatList: DTOCronograma = {
        id_cronograma: isTimelinePresent.id,
        dataPrevista: convertDate,
        tarefas: formatDates,
        diasRestantes: time,
      };

      setList(formatList);
    } catch (error) {
      Toast.error(error.message);
    } finally {
      list?.tarefas?.forEach(element => {
        if (element.dataConclusao) {
          done += 1;
        }
      });

      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      loadList();
    }
  }, [loadList, loading]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <ToastManager duration={2000} style={styles.notification} />

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
      )}
    </>
  );
}
