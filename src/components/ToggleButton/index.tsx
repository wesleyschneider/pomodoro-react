import React, { useContext } from 'react';
import { IconType } from 'react-icons';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface ToggleProps {
  checked: boolean;
  IconChecked: IconType;
  IconUnchecked: IconType;
  onChange: () => void;
}

const ToggleButton: React.FC<ToggleProps> = ({
  checked,
  IconChecked,
  IconUnchecked,
  onChange,
}) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container type="button" onClick={onChange}>
      {checked ? (
        <IconChecked size={30} color={colors.text} />
      ) : (
        <IconUnchecked size={30} color={colors.text} />
      )}
    </Container>
  );
};

export default ToggleButton;
