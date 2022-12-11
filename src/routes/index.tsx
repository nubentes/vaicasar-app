import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import colors from '../styles/colors';
import { useAuth } from '../context/auth';
import { AuthRoutes } from './auth.routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer theme={MyTheme}>
      {user?.email ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
