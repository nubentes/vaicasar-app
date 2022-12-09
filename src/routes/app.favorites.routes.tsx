import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Favorites } from '../screens/Favorites';
import { StoreDetails } from '../screens/StoreDetails';

export type RootStackParamList = {
  // navigate(screen: string, obj: { task: TaskProps; type: string }): unknown;
  Principal: undefined;
  LojaDetalhes: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Principal'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppFavoriteRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Principal" component={Favorites} />
      <Screen name="LojaDetalhes" component={StoreDetails} />
    </Navigator>
  );
}
