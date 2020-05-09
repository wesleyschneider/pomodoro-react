import React, { useState, useCallback, useEffect, useContext } from 'react';
import { subSeconds, differenceInSeconds } from 'date-fns';
import { Howl } from 'howler';
import { ThemeContext } from 'styled-components';
import { IoIosPlay, IoIosPause, IoIosClose } from 'react-icons/io';

import usePersistedState from '../../utils/usePersistedState';
import formatTimeDisplay from '../../utils/formatTimeDisplay';

import { Container, Content, Buttons } from './styles';

import Timer from '../../components/Timer';
import Button from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';
import MinutesControl from '../../components/MinutesControl';

const Main: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const [started, setStarted] = useState(false);
  const [reseted, setReseted] = useState(false);
  const [isTimeBreak, setIsTimeBreak] = usePersistedState('isTimeBreak', false);

  const [minuteSession, setMinuteSession] = usePersistedState(
    'minuteSession',
    25,
  );
  const [minuteBreak, setMinuteBreak] = usePersistedState('minuteBreak', 5);

  const [timeInitial] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [time, setTime] = useState(new Date(0, 0, 0, 0, minuteSession, 0, 0));
  const [timeDisplay, setTimeDisplay] = useState(
    formatTimeDisplay(time, timeInitial),
  );

  const [timer, setTimer] = useState(0);

  const start = useCallback(() => {
    setStarted(true);
    setReseted(false);

    setTimer(
      setInterval(() => {
        setTime(oldTime => subSeconds(oldTime, 1));
      }, 1000),
    );
  }, []);

  const stop = useCallback(() => {
    setStarted(false);
    setReseted(false);

    clearInterval(timer);
  }, [timer]);

  const reset = useCallback(() => {
    setTime(new Date(0, 0, 0, 0, minuteSession, 0, 0));

    setReseted(true);
    setIsTimeBreak(false);
  }, [minuteSession, setIsTimeBreak]);

  const changeSession = useCallback(
    (session: number) => {
      if (session >= 1 && session <= 60) {
        setMinuteSession(session);
      }
    },
    [setMinuteSession],
  );

  const changeBreak = useCallback(
    (breakValue: number) => {
      if (breakValue >= 1 && breakValue <= 60) {
        setMinuteBreak(breakValue);
      }
    },
    [setMinuteBreak],
  );

  useEffect(() => {
    setTime(
      new Date(0, 0, 0, 0, isTimeBreak ? minuteBreak : minuteSession, 0, 0),
    );
  }, [isTimeBreak, minuteBreak, minuteSession]);

  useEffect(() => {
    setTimeDisplay(formatTimeDisplay(time, timeInitial));
    if (differenceInSeconds(time, timeInitial) === 0) {
      stop();

      setIsTimeBreak(oldIsTimeBreak => !oldIsTimeBreak);

      const sound = new Howl({
        src: ['https://www.tones7.com/media/aqua.mp3'],
        html5: true,
      });
      sound.play();
    }
  }, [setIsTimeBreak, stop, time, timeInitial]);

  return (
    <Container>
      <Content>
        <Timer>
          <h1>{timeDisplay}</h1>
        </Timer>
      </Content>
      <Buttons>
        <Button type="button" disabled={reseted || started} onClick={reset}>
          <IoIosClose size={30} color={colors.text} />
        </Button>
        <ToggleButton
          checked={!started}
          IconChecked={IoIosPlay}
          IconUnchecked={IoIosPause}
          onChange={(): void => (!started ? start() : stop())}
        />
      </Buttons>
      <Content>
        <MinutesControl
          title="Sessão"
          started={started}
          minute={minuteSession}
          changeMinute={changeSession}
        />
        <MinutesControl
          title="Intervalo"
          started={started}
          minute={minuteBreak}
          changeMinute={changeBreak}
        />
      </Content>
    </Container>
  );
};

export default Main;
