import React, { useState } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTask } from '../../context/list';
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
  placeHolder?: string;
  searchable?: boolean;
  onSelectItem: () => void;
  style?: StyleProp<ViewStyle>;
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

export function DropDown({
  state,
  setState,
  placeHolder,
  searchable,
  onSelectItem,
  style,
}: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { filterItem, setFilterItem } = useTask();

  return (
    <Container style={style}>
      <Icon
        name={icons.list}
        color={theme.icon.button.primary}
        style={styles.icon}
      />
      <DropDownPicker
        loading={loading}
        open={open}
        value={filterItem}
        items={state}
        setOpen={setOpen}
        setValue={setFilterItem}
        setItems={setState}
        style={styles.topContainer}
        placeholder={placeHolder}
        textStyle={theme.input.text}
        labelStyle={theme.input.text}
        dropDownContainerStyle={styles.bottomContainer}
        listMode="FLATLIST"
        searchable={searchable}
        onSelectItem={onSelectItem}
        TickIconComponent={() => (
          <Icon name="check" color={colors.green_cyan} />
        )}
      />
    </Container>
  );
}
