import styled from 'styled-components/native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(View)`
  height: ${RFValue(97)}px;

  border-radius: 16px;

  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.button.background.primary};

  flex-direction: row;
`;

export const Wrap = styled(View)`
  flex-direction: column;

  align-items: center;
`;
