import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(112)}px;

  background-color: ${colors.pink_red};

  align-self: center;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin: 10px;
  padding: 16px;

  border-radius: 16px;
`;
