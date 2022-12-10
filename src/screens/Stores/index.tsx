import React, { useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Category } from '../../components/Category';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { useTask } from '../../context/list';
import colors from '../../styles/colors';
import { Container, Loading, Card } from './styles';

export function Stores() {
  const [search, setSearch] = useState('');
  const { categories } = useTask();

  const handleCategoryList = () => {
    return <Category search={search} />;
  };

  const noCategories = () => {
    return (
      <Container>
        <Header title="Buscar" />
        <Input
          value={search}
          onChangeText={setSearch}
          editable
          icon="search"
          placeholder="Busca"
        />
        <Label text="Categorias" bigLabel />

        <Loading>
          <ActivityIndicator size="large" color={colors.pink_red} />
        </Loading>
      </Container>
    );
  };

  const getCategories = () => {
    return (
      <Container>
        <Header title="Buscar" />

        <Input
          value={search}
          onChangeText={setSearch}
          editable
          icon="search"
          placeholder="Busca"
        />

        <Card style={{ paddingTop: 24 }}>
          <Label text="Categorias" bigLabel />
          {handleCategoryList()}
        </Card>
      </Container>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {!categories ? noCategories() : getCategories()}
    </ScrollView>
  );
}
