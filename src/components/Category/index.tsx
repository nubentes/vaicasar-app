import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTask } from '../../context/list';
import { DTOCategoria } from '../../dtos/categoria';
import colors from '../../styles/colors';
import { FONTS, SIZES } from '../../styles/fonts';
import { Label } from '../Label';

import { Card } from './styles';

interface ParamsProps {
  search: string;
}

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.MEDIUM,
    fontFamily: FONTS.MANROPE_SEMI_BOLD,
    color: colors.white,
  },
});

export function Category({ search }: ParamsProps) {
  const navigation = useNavigation();

  const { categories, stores } = useTask();

  const handleCategory = (item: DTOCategoria) => {
    const { descricao } = item;

    navigation.navigate('Resultados', { descricao });
  };

  const getResults = (descricao: string) => {
    const { length } = stores.filter(store => store.categoria === descricao);

    return length > 1 ? (
      <Label text={` ${length} resultados`} style={styles.text} />
    ) : (
      <Label text={` ${length} resultado`} style={styles.text} />
    );
  };

  return (
    <>
      {categories
        .filter(
          item =>
            item.descricao.includes(search) ||
            item.descricao.toLowerCase() === search.toLowerCase() ||
            search === '',
        )
        .map((item: DTOCategoria) => {
          return item.id !== 0 ? (
            <Card key={item.id} onPress={() => handleCategory(item)}>
              <Label text={item.descricao} style={styles.text} />
              {getResults(item.descricao)}
            </Card>
          ) : null;
        })}
    </>
  );
}
