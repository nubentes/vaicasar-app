import React, { useState } from 'react';
import { Dimensions, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { customWidth } from '../../constants/measures';
import colors from '../../styles/colors';
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
    borderWidth: 1,
    borderColor: colors.greys.light,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    backgroundColor: theme.button.background.secondary,
    height: 56,
    zIndex: 100,
  },
  bottomContainer: {
    borderWidth: 1,
    borderColor: theme.input.borderColor,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: theme.button.background.secondary,
  },
  icon: {
    borderWidth: 1,
    borderColor: theme.button.border.primary,
    borderRightWidth: 0,
    height: 56,
  },
});

export function DropDown({ state, setState }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  return (
    <Container>
      <Icon
        name={icons.list}
        color={theme.icon.button.primary}
        style={styles.icon}
      />
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
