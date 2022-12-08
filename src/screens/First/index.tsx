import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Calendar, DayProps } from '../../components/Calendar';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import theme from '../../styles/theme';

import { Container } from './styles';
import icons from '../../utils/icons';
import { useAuth, User } from '../../context/auth';

const styles = StyleSheet.create({
  calendarButtonStyle: {
    borderWidth: 1,
    borderColor: theme.button.border.primary,
    backgroundColor: theme.input.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 15,
  },

  calendarTextStyle: {
    fontSize: theme.input.text.fontSize,
    fontFamily: theme.input.text.fontFamily,
    color: theme.button.text.color.terciary,
  },

  icon: {
    borderWidth: 1,
    borderColor: theme.button.border.primary,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },

  continueButtonStyle: {
    marginTop: 15,
  },

  continueButtonTextStyle: {
    color: theme.button.text.color.primary,
    fontSize: theme.button.text.fontSize,
    fontFamily: theme.button.text.fontFamily,
    width: '100%',
    textAlign: 'center',
  },
});

export function First() {
  const [initialDate, setInitialDate] = useState('00/00/0000');
  const [modalVisible, setModalVisible] = useState(false);
  const { setUser } = useAuth();
  const navigation = useNavigation();

  const onDateChange = (date: DayProps) => {
    const formatted = moment(date.dateString).format('L');

    date.dateString = formatted;

    setModalVisible(false);
    setInitialDate(date.dateString);
  };

  const handleNavigation = () => {
    if (initialDate !== '00/00/0000') {
      const updateUser: User = {
        nome: 'Gabriel Monteiro',
        data: initialDate,
      };

      setUser(updateUser);
    }
  };

  return (
    <Container>
      <Label text="Escolha o dia do seu casamento" bigLabel />

      <Button
        buttonStyle={styles.calendarButtonStyle}
        text={initialDate}
        textStyle={styles.calendarTextStyle}
        icon={{ name: icons.calendar, color: theme.icon.button.primary }}
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={0}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Calendar
          style={{ borderRadius: 10 }}
          onDayPress={date => onDateChange(date)}
          headerStyle={{
            borderBottomWidth: 0.5,
            paddingBottom: 10,
            marginBottom: 10,
          }}
        />
      </Modal>

      <Button
        text="Continuar"
        buttonStyle={styles.continueButtonStyle}
        textStyle={styles.continueButtonTextStyle}
        onPress={() => handleNavigation()}
      />
    </Container>
  );
}
