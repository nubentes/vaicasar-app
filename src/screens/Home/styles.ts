import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrap = styled(View)`
  flex-direction: column;

  justify-content: space-between;

  padding: 24px;
`;

export const Title = styled(View)`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;
