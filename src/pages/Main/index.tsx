import React, { useState, useCallback, useEffect } from 'react';
import { subSeconds, differenceInSeconds } from 'date-fns';
import { Howl } from 'howler';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import formatTimeDisplay from '../../utils/formatTimeDisplay';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [reseted, setReseted] = useState(false);
  const [isTimeBreak, setIsTimeBreak] = useState(false);

  const [minuteSession, setMinuteSession] = useState(25);
  const [minuteBreak, setMinuteBreak] = useState(5);

  const [timeInitial] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [time, setTime] = useState(new Date(0, 0, 0, 0, minuteSession, 0, 0));
  const [timeDisplay, setTimeDisplay] = useState(
    formatTimeDisplay(time, timeInitial),
  );
  const [sessionCount, setSessionCount] = useState(1);

  const [timer, setTimer] = useState(0);

  const start = useCallback(() => {
    setStarted(true);
    setReseted(false);

    setSessionCount(oldSessionCount => oldSessionCount + 1);

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
  }, [minuteSession]);

  const changeSession = useCallback((session: number) => {
    if (session >= 1 && session <= 60) {
      setMinuteSession(session);
    }
  }, []);

  const changeBreak = useCallback((breakValue: number) => {
    if (breakValue >= 1 && breakValue <= 60) {
      setMinuteBreak(breakValue);
    }
  }, []);

  useEffect(() => {
    setTime(
      new Date(0, 0, 0, 0, isTimeBreak ? minuteBreak : minuteSession, 0, 0),
    );
  }, [isTimeBreak, minuteBreak, minuteSession]);

  useEffect(() => {
    setTimeDisplay(formatTimeDisplay(time, timeInitial));
    if (differenceInSeconds(time, timeInitial) === 0) {
      setStarted(false);
      clearInterval(timer);
      setIsTimeBreak(oldIsTimeBreak => !oldIsTimeBreak);

      const sound = new Howl({
        src: ['https://www.tones7.com/media/aqua.mp3'],
        html5: true,
      });
      sound.play();
    }
  }, [time, timeInitial, timer]);

  return (
    <Container>
      <Content>
        <h1>{timeDisplay}</h1>
        <button type="button" disabled={reseted || started} onClick={reset}>
          Resetar
        </button>
        <button type="button" disabled={started} onClick={start}>
          Iniciar
        </button>
        <button type="button" disabled={reseted || !started} onClick={stop}>
          Parar
        </button>
      </Content>
      <Content>
        <button
          type="button"
          disabled={started}
          onClick={(): void => changeSession(minuteSession + 1)}
        >
          <IoIosArrowUp size={20} />
        </button>
        <h3>{minuteSession}</h3>
        <button
          type="button"
          disabled={started}
          onClick={(): void => changeSession(minuteSession - 1)}
        >
          <IoIosArrowDown size={20} />
        </button>
        <button
          type="button"
          disabled={started}
          onClick={(): void => changeBreak(minuteBreak + 1)}
        >
          <IoIosArrowUp size={20} />
        </button>
        <h3>{minuteBreak}</h3>
        <button
          type="button"
          disabled={started}
          onClick={(): void => changeBreak(minuteBreak - 1)}
        >
          <IoIosArrowDown size={20} />
        </button>
      </Content>
    </Container>
  );
};

export default Main;
