import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Task } from '../screens/Task';

import { DTOTarefa } from '../dtos/tarefa';

export type RootStackParamList = {
  navigate(screen: string, obj: { task: DTOTarefa; type: string }): unknown;
  Principal: undefined;
  Tarefa: { task: DTOTarefa; type: string };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Tarefa'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppTasksRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Principal"
    >
      <Screen name="Principal" component={Home} />
      <Screen name="Tarefa" component={Task} />
    </Navigator>
  );
}
