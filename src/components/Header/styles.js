import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  h1 {
    font-weight: 400;
  }
`;
