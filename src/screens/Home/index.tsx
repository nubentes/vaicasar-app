import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Counter } from '../../components/Counter';
import { TaskList } from '../../components/TaskList';
import { useAuth } from '../../context/auth';
import { useTask } from '../../context/list';
import { First } from '../First';

import { Container } from './styles';

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  // const { list } = useTask();
  const { user } = useAuth();

  // useEffect(() => {
  //   if (!list.dataPrevista) {
  //     setModalVisible(true);
  //   }
  // }, []);

  return (
    <Container>
      {user ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Counter />
          <TaskList />
        </ScrollView>
      ) : (
        <First />
      )}
    </Container>
  );
}
