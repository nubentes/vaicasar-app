import { ImageBackground, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  flex: 1;

  padding: 24px;

  justify-content: center;
`;

export const Background = styled(Image).attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(253)}px;
  height: ${RFValue(171)}px;
`;
