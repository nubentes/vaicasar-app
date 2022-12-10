import styled from 'styled-components/native';
import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import { FONTS, SIZES } from '../../styles/fonts';

interface TitleProps {
  title?: boolean;
}

export const Container = styled(View)`
  padding-top: ${StatusBar.currentHeight}px;
  padding-bottom: 24px;
`;

export const Column = styled(View)``;

export const Wrap = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  border-radius: 16px;
`;

export const Button = styled(TouchableOpacity)`
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
