import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;

  align-items: center;

  align-self: center;

  padding: 0px 24px;

  height: ${RFValue(56)}px;
`;
