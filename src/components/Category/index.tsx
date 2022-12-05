import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import colors from '../../styles/colors';
import { Label } from '../Label';

import { Card } from './styles';

interface ItemProps {
  icon: string;
  category: string;
}

interface ParamsProps {
  search: string;
}

export default function Category({ search }: ParamsProps) {
  const theme = useTheme();

  const categories: ItemProps[] = [
    { icon: 'silverware-fork-knife', category: 'Buffet' },
    { icon: 'silverware-fork-knife', category: 'Cerimonia' },
    { icon: 'silverware-fork-knife', category: 'DJ' },
    { icon: 'silverware-fork-knife', category: 'Decoracao' },
  ];

  return (
    <>
      {categories
        .filter(
          item =>
            item.category.includes(search) ||
            item.category.toLowerCase() === search.toLowerCase() ||
            search === '',
        )
        .map((item: ItemProps) => (
          <Card key={item.category}>
            <Icon name={item.icon} size={24} color={colors.greys.dark} />
            <Label
              text={item.category}
              style={{ fontSize: 16, color: colors.black }}
            />
          </Card>
        ))}
    </>
  );
}
