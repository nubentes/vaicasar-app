import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../../components/Category';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Container, Card } from './styles';

export function Stores() {
  const [search, setSearch] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  const initialList = [
    { icon: 'silverware-fork-knife', categoria: 'Buffet' },
    { icon: 'silverware-fork-knife', categoria: 'Cerimonia' },
    { icon: 'silverware-fork-knife', categoria: 'DJ' },
    { icon: 'silverware-fork-knife', categoria: 'Decoracao' },
  ];

  const resultsList = () => {
    return (
      <Category
        search={search}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        categories={initialList}
      />
    );
  };

  const defaultList = () => {
    return (
      <Category
        search={search}
        categories={initialList}
        selectCategory={setCategorySelected}
      />
    );
  };

  return (
    <ScrollView>
      <Container>
        <Header title="Buscar" />
        <Input
          value={search}
          onChangeText={setSearch}
          editable
          icon="search"
          placeholder="Busca"
        />

        <Card>
          <Label text="Categorias" bigLabel />
          {categorySelected ? resultsList() : defaultList()}
        </Card>
      </Container>
    </ScrollView>
  );
}
