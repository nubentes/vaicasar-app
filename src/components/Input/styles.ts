import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: ${RFValue(10)}px;

  flex-direction: row;

  align-items: center;

  padding: ${RFValue(24)}px;
`;

export const DataInput = styled(TextInput)`
  width: ${RFValue(303)}px;
  height: ${RFValue(56)}px;

  background: ${({ theme }) => theme.input.background};

  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.input.borderColor};

  color: ${colors.black};

  font-size: ${({ theme }) => theme.input.text.fontSize}px;
  font-family: ${({ theme }) => theme.input.text.fontFamily};
`;
