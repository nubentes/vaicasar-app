import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Results } from '../components/Results';
import { Stores } from '../screens/Stores';
import { Store } from '../screens/Store';

export type RootStackParamList = {
  // navigate(screen: string, obj: { task: TaskProps; type: string }): unknown;
  Lojas: undefined;
  Resultados: { categoria: string };
  Loja: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Lojas'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStoreRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Lojas" component={Stores} />
      <Screen name="Resultados" component={Results} />
      <Screen name="Loja" component={Store} />
    </Navigator>
  );
}
