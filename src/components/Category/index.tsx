import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { FONTS, SIZES } from '../../styles/fonts';
import { Label } from '../Label';

import { Card } from './styles';

interface ItemProps {
  icon: string;
  categoria: string;
}

interface ParamsProps {
  search: string;
  categories: ItemProps[];
}

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.MEDIUM,
    fontFamily: FONTS.MANROPE_SEMI_BOLD,
    color: colors.white,
  },
});

export function Category({ search, categories }: ParamsProps) {
  const navigation = useNavigation();

  const handleCategory = (item: ItemProps) => {
    const { categoria } = item;

    navigation.navigate('Resultados', { categoria });
  };

  return (
    <>
      {categories
        .filter(
          item =>
            item.categoria.includes(search) ||
            item.categoria.toLowerCase() === search.toLowerCase() ||
            search === '',
        )
        .map((item: ItemProps) => (
          <Card key={item.categoria} onPress={() => handleCategory(item)}>
            <Label text={item.categoria} style={styles.text} />
            <Label text="16 resultados" style={styles.text} />
          </Card>
        ))}
    </>
  );
}
