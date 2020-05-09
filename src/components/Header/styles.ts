import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0;
  color: ${({ theme }): string => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-weight: 800;
  }
`;
