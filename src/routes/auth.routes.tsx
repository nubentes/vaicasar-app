import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { First } from '../screens/First';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="First">
      <Screen name="First" component={First} />
    </Navigator>
  );
}
