import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Category from '../../components/Category';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import colors from '../../styles/colors';
import theme from '../../styles/theme';

import { Container, SearchArea } from './styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.black,
  },
  input: {
    marginRight: '15%',
  },
});

export function Stores() {
  const [search, setSearch] = useState('');

  return (
    // <ScrollView>
    <Container>
      <Label text="Minhas Tarefas" bigLabel />
      <Input
        value={search}
        onChangeText={setSearch}
        editable
        icon="search"
        placeholder="Busca"
      />

      <Category search={search} />
    </Container>
    // </ScrollView>
  );
}
