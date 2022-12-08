import styled from 'styled-components/native';
import { StatusBar, Text, View } from 'react-native';
import colors from '../../styles/colors';
import { FONTS, SIZES } from '../../styles/fonts';

interface TitleProps {
  title?: string;
}

export const Container = styled.View`
  height: 80px;
  padding: ${StatusBar.currentHeight}px;
  background-color: ${colors.white};
`;

export const Column = styled(View)``;

export const Wrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  background-color: ${colors.greys.very_light};
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const Title = styled(Text)<TitleProps>`
  font-family: ${({ title }) =>
    title ? FONTS.MANROPE_EXTRA_BOLD : FONTS.MANROPE_REGULAR};
  font-size: ${({ title }) => (title ? SIZES.VERY_LARGE : SIZES.LARGE)}px;
  color: ${({ title }) => (title ? colors.greys.dark : colors.greys.regular)};
`;
