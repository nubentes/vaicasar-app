import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import { Category } from '../../components/Category';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { useAuth } from '../../context/auth';
import { getCategories } from '../../services/categories';
import { getStores } from '../../services/store';

import colors from '../../styles/colors';
import { Container, Loading, Card } from './styles';

const styles = StyleSheet.create({
  notification: {
    width: 327,
    height: 56,
  },
});

export function Stores() {
  const [search, setSearch] = useState('');
  const { categories, setStores, user, setCategories, setLoading } = useAuth();

  const handleCategoryList = () => {
    return <Category search={search} />;
  };

  const noCategories = () => {
    return (
      <Container>
        <ToastManager duration={2000} style={styles.notification} />

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

  const showCategoryList = () => {
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

  const loadCategories = async () => {
    try {
      const categoriesList = await getCategories(user);

      const storesList = await getStores(user);

      setStores(storesList);
      setCategories(categoriesList);
    } catch (error) {
      Toast.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {!categories ? noCategories() : showCategoryList()}
    </ScrollView>
  );
}
