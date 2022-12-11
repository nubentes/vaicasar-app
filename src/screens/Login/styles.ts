import { ImageBackground, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  /* flex: 1; */

  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height}px;

  padding: 24px;
`;
