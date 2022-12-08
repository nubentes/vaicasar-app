import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Favorites } from '../screens/Favorites';
import { Store } from '../screens/Store';

export type RootStackParamList = {
  // navigate(screen: string, obj: { task: TaskProps; type: string }): unknown;
  Favoritos: undefined;
  Loja: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Favoritos'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStoreRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Favoritos" component={Favorites} />
      <Screen name="Loja" component={Store} />
    </Navigator>
  );
}
