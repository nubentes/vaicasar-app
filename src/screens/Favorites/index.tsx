import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DropDown } from '../../components/DropDown';
import { Header } from '../../components/Header';
import { Icon } from '../../components/Icon';
import { Label } from '../../components/Label';
import { StoreProps, useTask } from '../../context/list';
import colors from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import theme from '../../styles/theme';

import { Button, Card, Container, Info, RatingContainer, Wrap } from './styles';

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

interface Item {
  label: string;
  value: string;
}

export function Favorites() {
  const { categories, setCategories, stores, setStores } = useTask();
  const [favorites, setFavorites] = useState<StoreProps[]>([]);
  const [formattedCategories, setFormattedCategories] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigation = useNavigation();

  const storeRating = () => {
    const arr = [0, 1, 2, 3, 4, 5];

    return (
      <RatingContainer>
        {arr.map(a => (
          <Icon
            key={a}
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

  const getFavorites = () => {
    const temp = stores.filter(store => store.favorite === true);

    setFavorites(temp);
  };

  const getCategories = () => {
    if (categories) {
      const temp = categories.map(categorie => {
        const formattedCategorie = {
          label: categorie.descricao,
          value: categorie.descricao,
        };

        return formattedCategorie;
      });

      setFormattedCategories(temp);
    }
  };

  const filterByCategory = (item: Item) => {
    if (item.label === 'Todas') {
      getCategories();
      setSelectedCategory(item.label);
    } else {
      const filteredList = favorites.map(favorite => {
        if (favorite.nome === item.label) {
          return favorite;
        }
        return favorite;
      });

      setFavorites(filteredList);
      setSelectedCategory(item.value);
    }
  };

  useEffect(() => {
    getFavorites();
    getCategories();
  }, [stores, selectedCategory]);

  return (
    <Container>
      <Header title="Favoritos" />
      <Info>
        <DropDown
          state={formattedCategories}
          setState={() => setCategories}
          placeHolder="Selecione uma categoria"
          onSelectItem={item => filterByCategory(item)}
        />
      </Info>

      <ScrollView>
        <>
          {favorites
            .filter(item =>
              selectedCategory === 'Todas'
                ? item
                : item.categoria.includes(selectedCategory) ||
                  item.categoria.toLowerCase() ===
                    selectedCategory.toLowerCase() ||
                  selectedCategory === '',
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
      </ScrollView>
    </Container>
  );
}
