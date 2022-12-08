import { Dimensions, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

export const Container = styled(View)`
  flex: 1;
`;

export const Info = styled(View)`
  padding: 24px;
`;

export const Card = styled(TouchableOpacity)`
  width: ${RFValue(0.9 * width)}px;
  height: ${RFValue(112)}px;

  align-self: center;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin: 10px;
  padding: 16px;

  border-radius: 16px;
`;

export const Wrap = styled(View)`
  flex-direction: column;
`;

export const RatingContainer = styled(View)`
  flex-direction: row;
`;

export const Button = styled(TouchableOpacity)``;
