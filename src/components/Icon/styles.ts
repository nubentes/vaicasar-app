import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.input.background};

  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;

  padding: 16px;
`;
