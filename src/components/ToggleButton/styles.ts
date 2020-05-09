import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.button`
  border: none;
  margin: 0;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: linear-gradient(
    145deg,
    ${({ theme }): string => shade(0.1, theme.colors.background)},
    ${({ theme }): string => theme.colors.background}
  );
  box-shadow: 15px 15px 30px
      ${({ theme }): string => shade(0.1, theme.colors.background)},
    -15px -15px 30px
      ${({ theme }): string => lighten(0.1, theme.colors.backgroundSecundary)};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 9px 9px 16px
        ${({ theme }): string => shade(0.13, theme.colors.background)},
      -9px -9px 16px
        ${({ theme }): string => lighten(0.1, theme.colors.backgroundSecundary)};
  }

  &:active {
    box-shadow: inset 9px 9px 16px
        ${({ theme }): string => shade(0.15, theme.colors.background)},
      inset -9px -9px 16px
        ${({ theme }): string => lighten(0.1, theme.colors.background)};
  }
`;
