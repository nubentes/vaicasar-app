import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../../styles/theme';
import icons from '../../utils/icons';
import { Icon } from '../Icon';

import { Container } from './styles';

interface DropDownProps {
  state: {
    label: string;
    value: string;
  }[];
  setState: () => void;
}

const styles = StyleSheet.create({
  topContainer: {
    borderWidth: 0.001,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: theme.button.background.secondary,
    height: 56,
    width: 303,
    zIndex: 100,
  },
  bottomContainer: {
    borderWidth: 1,
    borderColor: theme.input.borderColor,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: theme.button.background.secondary,
  },
});

export function DropDown({ state, setState }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  return (
    <Container>
      <Icon name={icons.list} color={theme.icon.button.primary} />
      <DropDownPicker
        open={open}
        value={item}
        items={state}
        setOpen={setOpen}
        setValue={setItem}
        setItems={setState}
        style={styles.topContainer}
        placeholder="Loja"
        textStyle={theme.input.text}
        labelStyle={theme.input.text}
        dropDownContainerStyle={styles.bottomContainer}
        listMode="FLATLIST"
      />
    </Container>
  );
}
