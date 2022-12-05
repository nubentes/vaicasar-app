import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Task } from '../screens/Task';
import { TaskProps } from '../context/list';

import { Header } from '../components/Header';
import { Stores } from '../screens/Stores';

export type RootStackParamList = {
  navigate(screen: string, obj: { task: TaskProps; type: string }): unknown;
  Principal: undefined;
  Tarefa: { task: TaskProps; type: string };
  Loja: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Tarefa'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Principal"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Screen
        name="Tarefa"
        component={Task}
        options={{
          header: () => <Header />,
        }}
      />
    </Navigator>
  );
}
