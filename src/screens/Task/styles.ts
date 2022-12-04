import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Info = styled.View`
  flex: 1;

  margin-top: 20px;

  align-items: center;

  padding: 24px;
`;
