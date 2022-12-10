import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Favorites } from '../screens/Favorites';
import { StoreDetails } from '../screens/StoreDetails';
import { Header } from '../components/Header';

export type RootStackParamList = {
  // navigate(screen: string, obj: { task: TaskProps; type: string }): unknown;
  ListaFavoritos: undefined;
  LojaDetalhes: undefined;
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'ListaFavoritos'
>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppFavoriteRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ListaFavoritos" component={Favorites} />
      <Screen name="LojaDetalhes" component={StoreDetails} />
    </Navigator>
  );
}
