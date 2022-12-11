import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Title = styled(View)`
  width: 100%;

  padding-top: 24px;
  padding-bottom: 24px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Loading = styled(View)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
