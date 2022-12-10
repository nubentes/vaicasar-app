import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import { Profile } from '../screens/Profile';
import { AppFavoriteRoutes } from './app.favorites.routes';
import { AppTasksRoutes } from './app.tasks.routes';
import { AppStoreRoutes } from './app.store.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.icon.tabBar.active,
        tabBarInactiveTintColor: theme.icon.tabBar.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72,
          backgroundColor: theme.container.background,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={AppTasksRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={theme.icon.size} color={color} />
          ),
        }}
      />

      <Screen
        name="Buscar"
        component={AppStoreRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={theme.icon.size} color={color} />
          ),
        }}
      />

      <Screen
        name="Favoritos"
        component={AppFavoriteRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={theme.icon.size} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={theme.icon.size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
