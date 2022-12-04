import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { AuthProvider } from './src/context/auth';
import { TaskProvider } from './src/context/list';
import Routes from './src/routes';
import theme from './src/styles/theme';

import { Fonts } from './src/styles/fonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    GREAT_VIBES_REGULAR: GreatVibes_400Regular,
    MANROPE_EXTRA_LIGHT: Manrope_200ExtraLight,
    MANROPE_LIGHT: Manrope_300Light,
    MANROPE_REGULAR: Manrope_400Regular,
    MANROPE_MEDIUM: Manrope_500Medium,
    MANROPE_SEMI_BOLD: Manrope_600SemiBold,
    MANROPE_BOLD: Manrope_700Bold,
    MANROPE_EXTRA_BOLD: Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TaskProvider>
          <StatusBar
            backgroundColor={theme.container.background}
            style="dark"
          />

          <Routes />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
