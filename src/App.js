import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import history from './services/history';
import GlobalTheme from './styles/global';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <Router history={history}>
        <GlobalTheme />
        <Header />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}
