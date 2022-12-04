import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import AppStackRoutes from './app.stack.routes';
import Stores from '../screens/Stores';
import Header from '../components/Header';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.icon.tabBar.active,
        tabBarInactiveTintColor: theme.icon.tabBar.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72,
          backgroundColor: theme.container.background,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={theme.icon.size} color={color} />
          ),
        }}
      />

      <Screen
        name="Buscar"
        component={Stores}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={theme.icon.size} color={color} />
          ),
          title: '',
          header: () => <Header />,
        }}
      />

      <Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={theme.icon.size} color={color} />
          ),
          title: '',
          header: () => <Header />,
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={theme.icon.size} color={color} />
          ),
          title: '',
          header: () => <Header />,
        }}
      />
    </Navigator>
  );
}
