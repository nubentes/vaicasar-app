import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { First } from '../screens/First';
import { Login } from '../screens/Login';
import { CreateAccount } from '../screens/CreateAccount';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="First" component={First} />
    </Navigator>
  );
}
