import { View } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled(View)`
  flex: 1;

  background-color: ${({ theme }) => theme.container.background};

  align-items: center;

  justify-content: center;

  padding: 0px 24px;
`;

export const Content = styled(View)`
  flex-direction: column;
`;

export const ButtonStatus = styled(View)<ButtonProps>`
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
