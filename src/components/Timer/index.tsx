import React, { HTMLAttributes } from 'react';

import { Container, Content } from './styles';

const Timer: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Timer;
