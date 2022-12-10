import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled(View)`
  flex: 1;

  padding: 24px;
`;

export const Card = styled(TouchableOpacity)`
  height: ${RFValue(112)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.greys.light};
`;

export const Wrap = styled(View)`
  height: ${RFValue(71)}px;
  flex-direction: column;
  justify-content: space-between;
`;

export const RatingContainer = styled(View)`
  width: ${RFValue(147)}px;
  flex-direction: row;

  align-items: center;
`;

export const Button = styled(TouchableOpacity)``;
