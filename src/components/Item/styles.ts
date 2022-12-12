import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { SIZES } from '../../styles/fonts';

interface Props {
  check: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${RFValue(90)}px;

  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  margin: 8px;

  border-radius: 16px;

  border: 1px;
  border-color: ${({ theme }) => theme.button.border.primary};

  background-color: ${({ theme, check }) =>
    check ? theme.card.background.active : theme.card.background.primary};
`;

export const Info = styled.View`
  width: 50%;
  flex-direction: column;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.card.text.fontFamily.bold};
  font-size: ${SIZES.MEDIUM}px;
  text-align: left;

  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_dark};
`;

export const DateText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.card.text.fontFamily.regular};

  font-size: ${({ theme }) => theme.card.text.fontSize.subtitle}px;

  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_medium};
`;

export const Button = styled(TouchableOpacity)<Props>``;

export const Check = styled(Icon).attrs({
  size: 24,
})<Props>`
  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_dark};
  margin-left: 10px;
  margin-right: 10px;
`;
