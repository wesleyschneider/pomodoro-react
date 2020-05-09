import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import IconButton from '../IconButton';

import { Container, Content, Title, Value } from './styles';

interface MinutesControlProps {
  started: boolean;
  title: string;
  minute: number;
  changeMinute: (minute: number) => void;
}

const MinutesControl: React.FC<MinutesControlProps> = ({
  started,
  title,
  minute,
  changeMinute,
}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
      </Content>
      <Content>
        <IconButton
          type="button"
          Icon={IoIosArrowUp}
          disabled={started}
          onClick={(): void => changeMinute(minute + 1)}
        />
        <Value>{minute}</Value>
        <IconButton
          type="button"
          Icon={IoIosArrowDown}
          disabled={started}
          onClick={(): void => changeMinute(minute - 1)}
        />
      </Content>
    </Container>
  );
};

export default MinutesControl;
