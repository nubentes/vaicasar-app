import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TaskProps, useTask } from '../../context/list';
import 'moment/locale/pt-br';
import { Item } from '../Item';

import { Container } from './styles';

export function TaskList(): JSX.Element {
  const { list, loading } = useTask();

  const taskItem = (item: TaskProps) => {
    return <Item key={item.id} params={item} />;
  };

  return (
    <Container>
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
