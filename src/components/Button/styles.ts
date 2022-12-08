import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(56)}px;

  flex-direction: row;

  border-radius: 16px;

  align-items: center;

  background-color: ${({ theme }) => theme.button.background.primary};

  align-self: center;
`;

export const Content = styled(View)`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;
