import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;

  padding: 0px 24px;
`;

export const Wrap = styled(View)`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(View)`
  width: 90%;
  height: 45%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Loading = styled(View)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
