import React, { useState, useContext } from 'react';
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdSunny,
  IoIosMoon,
} from 'react-icons/io';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

import ToggleButton from '../ToggleButton';

function Header() {
  const { title, toggleTheme } = useContext(ThemeContext);

  const [volume, setVolume] = useState(true);

  return (
    <Container>
      <ToggleButton
        checked={volume}
        IconChecked={IoMdVolumeHigh}
        IconUnchecked={IoMdVolumeOff}
        onChange={() => setVolume(!volume)}
      />

      <h1>Pomodoro</h1>

      <ToggleButton
        checked={title === 'dark'}
        IconChecked={IoIosMoon}
        IconUnchecked={IoMdSunny}
        onChange={toggleTheme}
      />
    </Container>
  );
}

export default Header;
