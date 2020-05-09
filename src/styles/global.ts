import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    font: 14px 'Nunito', sans-serif;
    background: ${({ theme }): string => theme.colors.background};
    background: linear-gradient(149deg, ${({ theme }): string =>
      theme.colors.backgroundSecundary} 0%, ${({ theme }): string =>
  theme.colors.background} 50%);
    color: ${({ theme }): string => theme.colors.text};
  }
  button{
    cursor: pointer;
  }
`;
