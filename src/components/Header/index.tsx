import React, { useState, useContext, useEffect } from 'react';
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdSunny,
  IoIosMoon,
} from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { Howler } from 'howler';

import { Container } from './styles';

import ToggleButton from '../ToggleButton';

const Header: React.FC = () => {
  const { title, toggleTheme } = useContext(ThemeContext);

  const [volume, setVolume] = useState(true);

  useEffect(() => {
    Howler.volume(volume ? 1.0 : 0);
  }, [volume]);

  return (
    <Container>
      <ToggleButton
        checked={volume}
        IconChecked={IoMdVolumeHigh}
        IconUnchecked={IoMdVolumeOff}
        onChange={(): void => {
          setVolume(!volume);
        }}
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
};

export default Header;
