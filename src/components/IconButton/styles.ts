import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.button`
  border: none;
  margin: 0;
  padding: 10px;
  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: linear-gradient(
    145deg,
    ${({ theme }): string => shade(0.1, theme.colors.background)},
    ${({ theme }): string => theme.colors.background}
  );
  box-shadow: 13px 13px 24px
      ${({ theme }): string => shade(0.1, theme.colors.background)},
    -13px -13px 24px
      ${({ theme }): string => lighten(0.05, theme.colors.background)};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 9px 9px 16px
        ${({ theme }): string => shade(0.15, theme.colors.background)},
      -9px -9px 16px
        ${({ theme }): string => lighten(0.1, theme.colors.background)};
  }

  &:active {
    box-shadow: inset 9px 9px 16px
        ${({ theme }): string => shade(0.15, theme.colors.background)},
      inset -9px -9px 16px
        ${({ theme }): string => lighten(0.1, theme.colors.background)};
  }
`;
