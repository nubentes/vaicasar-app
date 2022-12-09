import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTask } from '../../context/list';
import 'moment/locale/pt-br';
import { Item } from '../Item';

import { Container, Loading } from './styles';
import { DTOTarefa } from '../../dtos/tarefa';
import colors from '../../styles/colors';

export function TaskList(): JSX.Element {
  const { list, loading } = useTask();

  const taskItem = (item: DTOTarefa) => {
    return <Item key={item.id} params={item} />;
  };

  if (loading) {
    return (
      <Loading>
        <ActivityIndicator size="large" color={colors.pink_red} />
      </Loading>
    );
  }

  return (
    <Container>
      {list.tarefas?.map(task => {
        return taskItem(task);
      })}
    </Container>
  );
}
