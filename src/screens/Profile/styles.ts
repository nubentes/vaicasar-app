import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(View)`
  flex: 1;
  padding: 24px;
`;

export const Avatar = styled(Image)`
  height: ${RFValue(179)}px;
  border-radius: 16px;
`;
