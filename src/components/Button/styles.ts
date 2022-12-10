import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.button.background.primary};
`;

export const SaveButton = styled(TouchableOpacity)`
  height: ${RFValue(56)}px;
  flex-direction: row;

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.button.background.primary};
`;
