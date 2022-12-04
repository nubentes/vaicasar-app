import moment from 'moment';
import React from 'react';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps,
} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';

import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;

LocaleConfig.defaultLocale = 'pt-br';

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

function Calendar({ onDayPress, markedDates, initialDate }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      initialDate={initialDate}
      renderArrow={direction => (
        <Icon
          size={24}
          color={theme.colors.black}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.white,
        borderBottomWidth: 1,
        borderBottomColor: theme.calendar.lineColor,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontSize: 15,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.black,
        arrowStyle: {
          marginHorizontal: -15,
        },
        dayTextColor: theme.colors.black,
        todayTextColor: theme.calendar.dayColor,
        todayBackgroundColor: theme.calendar.dotColor,
      }}
      style={{ borderRadius: 6 }}
      firstDay={1}
      onDayPress={onDayPress}
      markedDates={markedDates}
      minDate={moment().format()}
    />
  );
}

export { Calendar };
