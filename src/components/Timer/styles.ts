import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 250px;

  border-radius: 50%;
  background: ${({ theme }): string => theme.colors.background};
  box-shadow: 5px 5px 10px
      ${({ theme }): string => shade(0.1, theme.colors.background)},
    -5px -5px 10px
      ${({ theme }): string => lighten(0.1, theme.colors.background)};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 180px;
  border-radius: 50%;

  background: ${({ theme }): string => theme.colors.background};
  box-shadow: 0px 0px 34px -8px ${({ theme }): string => theme.colors.primary},
    0px 0px 34px -8px ${({ theme }): string => theme.colors.primary} inset;
  border: 10px solid ${({ theme }): string => theme.colors.primary};
`;
