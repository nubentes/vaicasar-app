import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import theme from '../../styles/theme';

interface LabelProps {
  text: string;
  style?: TextStyle | TextStyle[];
  bigLabel?: boolean;
}

const styles = StyleSheet.create({
  bigLabel: {
    fontSize: theme.card.text.fontSize.bigTitle,
    fontFamily: theme.card.text.fontFamily.extra_bold,
    color: theme.card.text.color.grey_dark,
  },
});

export function Label({ text, style, bigLabel }: LabelProps) {
  if (bigLabel) {
    return <Text style={styles.bigLabel}>{text}</Text>;
  }

  return <Text style={style}>{text}</Text>;
}
