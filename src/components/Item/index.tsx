import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Alert } from 'react-native';

import { TaskProps, useTask } from '../../context/list';
import { DTOTimeline } from '../../dtos/timeline';
import { deleteTask } from '../../services/list';

import { Check, Container, DateText, IconButton, Info, Title } from './styles';

interface ItemProps {
  params: TaskProps;
}

export function Item({ params }: ItemProps) {
  const navigation = useNavigation();
  const { list, setList, setLoading } = useTask();

  const isDone = params.dataConclusao !== null;

  const changeValue = (item: TaskProps) => {
    const temp = list.tarefas.map((task: TaskProps) => {
      const getData = () => {
        const currentDate = moment().format('L');
        const day = moment().get('date');
        const month = moment().get('month') + 1;
        const year = moment().get('year');
        const timestamp = moment().valueOf();

        task.dataConclusao = {
          dateString: currentDate,
          day,
          month,
          year,
          timestamp,
        };

        return task;
      };

      if (task.id === item.id) {
        const newData =
          task.dataConclusao === null
            ? getData()
            : {
                ...task,
                dataConclusao: null,
              };

        return newData;
      }

      return task;
    });

    const newList: DTOTimeline = {
      id: list.id,
      dataPrevista: list.dataPrevista,
      tarefas: temp,
    };

    setList(newList);
  };

  const handleDelete = (id: number) => {
    try {
      Alert.alert('Aviso', 'Tem certeza que deseja deletar? ', [
        {
          text: 'Sim',
          onPress: () => {
            setLoading(true);

            deleteTask(id);

            Alert.alert('Sucesso!', 'Item deletado com sucesso!');
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.name, error.message);
      } else {
        Alert.alert('Erro', 'Não foi possível deletar!');
      }
    }
  };

  return (
    <Container
      check={isDone}
      onPress={() =>
        navigation.navigate('Tarefa', { task: params, type: 'edit' })
      }
      onLongPress={() => handleDelete(params.id)}
    >
      <Info>
        <Title check={isDone}>{params.titulo}</Title>

        {isDone ? (
          <DateText check={isDone}>
            {params.dataConclusao?.dateString}- Finalizado
          </DateText>
        ) : (
          <DateText check={isDone}> --/--/--- Ainda não finalizado</DateText>
        )}
      </Info>

      <IconButton onPress={() => changeValue(params)}>
        <Check name={isDone ? 'check' : 'clock'} check={isDone} />
      </IconButton>
    </Container>
  );
}
