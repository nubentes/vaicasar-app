import { ImageBackground, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  padding: 24px;
`;

export const SubHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled(ImageBackground).attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(179)}px;
  margin-bottom: 24px;
`;

export const Wrap = styled(View)`
  flex-direction: column;
`;

export const Rating = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(51)}px;
`;
