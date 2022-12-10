import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled(View)`
  flex-direction: row;
`;

export const DataInput = styled(TextInput)`
  flex: 1;

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
