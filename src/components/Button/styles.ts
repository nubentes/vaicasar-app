import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  height: ${RFValue(56)}px;
  width: ${RFValue(327)}px;

  flex-direction: row;

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.button.background.primary};
`;

export const IconContainer = styled.View`
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.input.background};

  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;

  padding: 16px;
`;

export const Content = styled(View)`
  flex-direction: row;

  align-items: center;
`;
