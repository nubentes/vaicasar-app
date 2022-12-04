import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;

  align-items: center;
  margin-top: 20px;
`;

export const Title = styled(View)`
  width: ${RFValue(327)}px;
  height: ${RFValue(56)}px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Button = styled(TouchableOpacity)`
  width: 327px;
  height: 56px;

  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;
