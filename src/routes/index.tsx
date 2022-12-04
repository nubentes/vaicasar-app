import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import colors from '../styles/colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

export default function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppTabRoutes />
    </NavigationContainer>
  );
}
