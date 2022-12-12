import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled(View)`
  flex: 1;

  padding: 24px;
`;

export const Card = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.greys.light};

  margin-top: 10px;
`;

export const Wrap = styled(View)`
  flex-direction: column;
  justify-content: space-between;
`;

export const RatingContainer = styled(View)`
  flex-direction: row;

  left: 5px;

  align-items: center;
`;

export const Button = styled(TouchableOpacity)``;
