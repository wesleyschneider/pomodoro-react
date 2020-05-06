import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Container } from './styles';

function ToggleButton({ checked, IconChecked, IconUnchecked, onChange }) {
  const { colors } = useContext(ThemeContext);
  return (
    <Container type="button" onClick={onChange} checked={checked}>
      {checked ? (
        <IconChecked size={30} color={colors.text} />
      ) : (
        <IconUnchecked size={30} color={colors.text} />
      )}
    </Container>
  );
}

export default ToggleButton;
