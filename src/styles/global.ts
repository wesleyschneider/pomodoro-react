import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
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
    font: 14px 'Raleway', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  button{
    cursor: pointer;
  }
`;
