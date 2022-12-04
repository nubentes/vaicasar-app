import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { Input } from '../../components/Input';
import Label from '../../components/Label';
import theme from '../../styles/theme';

import { Container, SearchArea } from './styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: theme.colors.black,
  },
  input: {
    marginRight: '15%',
  },
});

export default function Stores() {
  const [search, setSearch] = useState('');

  return (
    <ScrollView>
      {/* <Container> */}
      <Header />

      <SearchArea>
        <Label text="Busca: " style={styles.text} />
        <Input style={styles.input} value={search} onChangeText={setSearch} />
      </SearchArea>

      <Category search={search} />
      {/* </Container> */}
    </ScrollView>
  );
}
