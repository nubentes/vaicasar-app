import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: ${RFValue(10)}px;
  flex-direction: row;

  padding: 24px;

  align-self: center;
`;

export const DataInput = styled(TextInput)`
  width: 100%;
  height: ${RFValue(56)}px;

  background: ${({ theme }) => theme.input.background};

  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;

  border-width: 1px;
  border-left-width: 0px;
  border-color: ${({ theme }) => theme.input.borderColor};

  color: ${colors.black};

  font-size: ${({ theme }) => theme.input.text.fontSize}px;
  font-family: ${({ theme }) => theme.input.text.fontFamily};
`;
