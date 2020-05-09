import React, { ButtonHTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({ Icon, ...props }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container {...props}>
      <Icon color={colors.text} size={20} />
    </Container>
  );
};

export default IconButton;
