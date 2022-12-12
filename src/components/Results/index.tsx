import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useAuth } from '../../context/auth';

import { DTOLoja } from '../../dtos/loja';
import colors from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import theme from '../../styles/theme';
import { LoadingIndicator } from '../ActivityIndicator/indexs';
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
  const { stores, setStores } = useAuth();

  const navigation = useNavigation();
  const route = useRoute();

  let icon = 'heart';

  const { descricao } = route.params as ParamsProps;

  const storeRating = () => {
    const arr = [0, 1, 2, 3, 4, 5];

    return (
      <RatingContainer>
        {arr.map(item => (
          <Icon
            key={item.valueOf()}
            name={styles.storeRating.name}
            color={styles.storeRating.color}
            iconButton
          />
        ))}
      </RatingContainer>
    );
  };

  const handleFavorite = (item: DTOLoja) => {
    icon = item.favorito ? 'heart-o' : 'heart';

    return icon;
    // const temp = stores.map(result => {
    //   const r =
    //     result.favorito === item.favorito ? result.favorito : item.favorito;

    //   return r;
    // });

    // setStores(temp);
  };

  const getResultBySelectedCategory = () => {
    const temp = stores.filter(
      store => store.categoria.descricao === descricao,
    );

    setResults(temp);
  };

  useEffect(() => {
    if (stores.length > 0) {
      getResultBySelectedCategory();
    }
  }, []);

  return (
    <>
      {stores.length === 0 ? (
        <LoadingIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Buscar" />

            <Input
              value={search}
              onChangeText={setSearch}
              editable
              icon="search"
              placeholder="Busca"
              containerStyle={{ paddingBottom: 24 }}
            />

            <>
              <Label text={descricao} bigLabel />

              {results
                .filter(
                  item =>
                    item.nome.includes(search) ||
                    item.nome.toLowerCase() === search.toLowerCase() ||
                    search === '',
                )
                .map((item: DTOLoja) => (
                  <Card
                    key={item.id}
                    onPress={() => navigation.navigate('Loja', { item })}
                  >
                    <Wrap>
                      <Label text={item.nome} style={styles.storeTitle} />
                      <Label
                        text={item.descricao}
                        style={styles.storeDescription}
                      />
                      <RatingContainer>
                        <Label
                          text={item.avaliacao.toFixed(1).toString()}
                          style={styles.storeDescription}
                        />
                        {storeRating()}
                      </RatingContainer>
                    </Wrap>
                    <Button onPress={() => handleFavorite(item)}>
                      <Icon
                        name={icon}
                        color={styles.notFavoriteButtonIcon.color}
                        iconButton
                      />
                    </Button>
                  </Card>
                ))}
            </>
          </Container>
        </ScrollView>
      )}
    </>
  );
}
