import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './src/context/auth';
import { TaskProvider } from './src/context/list';
import { Routes } from './src/routes';
import theme from './src/styles/theme';
import { useCachedResources } from './src/hooks/useCachedResources';

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return null;
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