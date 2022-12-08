import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StoreProps, useTask } from '../../context/list';
import colors from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import theme from '../../styles/theme';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Label } from '../Label';

import { Container, Card, RatingContainer, Wrap, Button } from './styles';

interface ParamsProps {
  descricao: string;
}

const styles = StyleSheet.create({
  storeTitle: {
    fontFamily: FONTS.MANROPE_SEMI_BOLD,
    color: colors.greys.dark,
  },
  storeDescription: {
    fontFamily: FONTS.MANROPE_SEMI_BOLD,
    color: colors.greys.medium,
  },
  storeRating: {
    name: 'star',
    color: colors.light_brown,
  },
  favoriteButtonIcon: {
    name: 'heart',
    color: theme.icon.button.primary,
  },
  notFavoriteButtonIcon: {
    name: 'heart-o',
    color: theme.icon.button.primary,
  },
});

export function Results() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { stores, setStores } = useTask();

  const navigation = useNavigation();
  const route = useRoute();

  const { descricao } = route.params as ParamsProps;

  const storeRating = () => {
    const arr = [0, 1, 2, 3, 4, 5];

    return (
      <RatingContainer>
        {arr.map(() => (
          <Icon
            name={styles.storeRating.name}
            color={styles.storeRating.color}
            iconButton
          />
        ))}
      </RatingContainer>
    );
  };

  const handleFavorite = (item: StoreProps) => {
    const temp = stores.map(result => {
      if (result === item) {
        result.favorite = !result.favorite;
        return result;
      }
      return result;
    });

    setStores(temp);
  };

  const getIcon = (item: StoreProps) => {
    if (item.favorite) {
      return (
        <Icon
          name={styles.favoriteButtonIcon.name}
          color={styles.favoriteButtonIcon.color}
          iconButton
        />
      );
    }

    return (
      <Icon
        name={styles.notFavoriteButtonIcon.name}
        color={styles.notFavoriteButtonIcon.color}
        iconButton
      />
    );
  };

  const getResultBySelectedCategory = () => {
    const temp = stores.filter(store => store.categoria === descricao);

    setResults(temp);
  };

  useEffect(() => {
    getResultBySelectedCategory();
  }, [stores]);

  return (
    <ScrollView>
      <Header title="Buscar" />

      <Container>
        <Input
          value={search}
          onChangeText={setSearch}
          editable
          icon="search"
          placeholder="Busca"
        />

        <>
          <Label text="Resultados" bigLabel />

          {results
            .filter(
              item =>
                item.nome.includes(search) ||
                item.nome.toLowerCase() === search.toLowerCase() ||
                search === '',
            )
            .map((item: StoreProps) => (
              <Card
                key={item.nome}
                onPress={() => navigation.navigate('Loja', { item })}
              >
                <Wrap>
                  <Label text={item.nome} style={styles.storeTitle} />
                  <Label
                    text={item.descricao}
                    style={styles.storeDescription}
                  />
                  <Label
                    text={item.avaliacao.toFixed(1).toString()}
                    style={styles.storeDescription}
                  />
                  {storeRating()}
                </Wrap>
                <Button onPress={() => handleFavorite(item)}>
                  {getIcon(item)}
                </Button>
              </Card>
            ))}
        </>
      </Container>
    </ScrollView>
  );
}
