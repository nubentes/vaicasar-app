import React from 'react';

import 'moment/locale/pt-br';
import { Item } from '../Item';

import { Container } from './styles';
import { DTOTarefa } from '../../dtos/tarefa';
import { useAuth } from '../../context/auth';

export function TaskList(): JSX.Element {
  const { list } = useAuth();

  const taskItem = (item: DTOTarefa) => {
    return <Item key={item.id} params={item} />;
  };

  return (
    <Container>
      {list?.tarefas?.map(task => {
        return taskItem(task);
      })}
    </Container>
  );
}
