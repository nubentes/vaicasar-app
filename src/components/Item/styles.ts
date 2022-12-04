import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

interface Props {
  check: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 327px;
  height: 71px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px;

  border-radius: 16px;

  border: 1px;
  border-color: ${({ theme }) => theme.button.border.primary};

  background-color: ${({ theme, check }) =>
    check ? theme.card.background.active : theme.card.background.primary};
`;

export const Info = styled.View`
  flex-direction: column;
  padding: 24px;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.card.text.fontFamily.bold};
  font-size: ${({ theme }) => theme.card.text.fontSize.title}px;

  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_dark};
`;

export const DateText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.card.text.fontFamily.regular};

  font-size: ${({ theme }) => theme.card.text.fontSize.subtitle}px;

  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_medium};
`;

export const IconButton = styled.TouchableOpacity<Props>``;

export const Check = styled(Icon).attrs({
  size: 24,
})<Props>`
  color: ${({ theme, check }) =>
    check ? theme.card.text.color.white : theme.card.text.color.grey_dark};
  margin-left: 10px;
  margin-right: 10px;
`;
