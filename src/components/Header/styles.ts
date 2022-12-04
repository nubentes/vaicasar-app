import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface TitleProps {
  title: string;
}

export const Container = styled.View`
  height: 80px;
  padding: 24px;
  background-color: ${colors.white};
`;

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

export const Title = styled.Text<TitleProps>`
  font-family: ${({ title }) =>
    title ? fonts.family.MANROPE_EXTRA_BOLD : fonts.family.MANROPE_REGULAR};
  font-size: ${({ title }) =>
    title ? fonts.size.VERY_LARGE : fonts.size.LARGE}px;
  color: ${({ title }) => (title ? colors.greys.dark : colors.greys.regular)};
`;
