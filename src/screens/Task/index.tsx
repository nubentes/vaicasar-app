import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import * as Yup from 'yup';
import ToastManager, { Toast } from 'toastify-react-native';
import { Calendar, DayProps } from '../../components/Calendar';

import { Props } from '../../routes/app.tasks.routes';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import colors from '../../styles/colors';
import { DropDown } from '../../components/DropDown';
import icons from '../../utils/icons';
import { DTOTarefa } from '../../dtos/tarefa';
import { Header } from '../../components/Header';
import { useAuth } from '../../context/auth';
import { createTask, editTask } from '../../services/tasks';

const styles = StyleSheet.create({
  input: {
    marginTop: 24,
  },
  button: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: theme.input.borderColor,
    backgroundColor: theme.input.background,
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: theme.input.text.fontSize,
    fontFamily: theme.input.text.fontFamily,
    color: colors.black,
  },
  icon: {
    borderWidth: 0,
    borderColor: theme.button.border.primary,
  },
  notification: {
    width: 327,
    height: 56,
  },
});

export function Task({ navigation, route }: Props) {
  const { list, user, stores, setLoading } = useAuth();
  const { task, type } = route.params;

  const [title, setTitle] = useState<string>(task?.titulo || '');
  const [scheduledDate, setScheduledDate] = useState<DayProps>(
    task.dataPrevista || {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
  );
  const [value, setValue] = useState(task?.valor);
  const [description, setDescription] = useState<string>(task?.descricao || '');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState();
  const [favorites, setFavorites] = useState();

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório!'),
        value: Yup.number()
          .positive('Valor deve ser maior que zero!')
          .nullable(),
      });

      await schema.validate({ title, value });

      switch (type) {
        case 'add':
          const newElement: DTOTarefa = {
            idCronograma: list.id_cronograma,
            tarefa: {
              titulo: title,
              dataPrevista: scheduledDate.dateString
                .split('/')
                .reverse()
                .join('-'),
              descricao: description,
            },
          };

          await createTask(newElement, user.token);
          Toast.success('Criado com sucesso!');

          break;

        case 'edit':
          const element: DTOTarefa = {
            idCronograma: list.id_cronograma,
            tarefa: {
              id: task.id,
              titulo: title,
              dataPrevista: scheduledDate.dateString
                .split('/')
                .reverse()
                .join('-'),
              descricao: description,
              valor: value,
            },
          };

          await editTask(element, user.token);
          Toast.success('Alterado com sucesso!');

          break;
        default:
          break;
      }

      setTimeout(() => {
        setLoading(true);
        navigation.goBack();
      }, 2000);
    } catch (error) {
      Toast.error(error);
    }
  };

  const onDateChange = (date: DayProps) => {
    const formatted = moment(date.dateString).format('L');

    date.dateString = formatted;

    setScheduledDate(date);
    setModalVisible(false);
  };

  const markedInitialDate = scheduledDate.dateString
    .split('/')
    .reverse()
    .join('-');

  const getFavorites = () => {
    const temp = stores?.filter(s => s.favorito === true);

    const convert = temp?.map(i => {
      const convertedItem = {
        label: i.nome,
        value: i.nome,
      };

      return convertedItem;
    });

    setFavorites(convert);
  };

  useEffect(() => {
    if (!favorites) {
      getFavorites();
    }
  }, []);

  return (
    <ScrollView>
      <Container>
        <ToastManager duration={1500} style={styles.notification} />

        <Header title="Tarefa" />

        <Input
          value={title}
          onChangeText={setTitle}
          editable
          icon="italic"
          placeholder="Título"
          placeholderTextColor={colors.greys.regular}
        />

        <Button
          buttonStyle={styles.button}
          text={scheduledDate.dateString || 'Data prevista'}
          textStyle={styles.textStyle}
          icon={{ name: icons.calendar, color: theme.icon.button.primary }}
          iconStyle={styles.icon}
          onPress={() => setModalVisible(true)}
        />

        <Button
          buttonStyle={[
            styles.button,
            { backgroundColor: theme.input.background },
          ]}
          text="Data conclusão"
          textStyle={styles.textStyle}
          icon={{ name: icons.calendar, color: theme.icon.button.primary }}
          iconStyle={styles.icon}
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
            markedDates={{
              [markedInitialDate]: {
                selected: true,
                marked: true,
                selectedColor: colors.pink_red,
              },
            }}
            initialDate={markedInitialDate}
            style={{ borderRadius: 10 }}
            onDayPress={date => onDateChange(date)}
            headerStyle={{
              borderBottomWidth: 0.5,
              paddingBottom: 10,
              marginBottom: 10,
            }}
          />
        </Modal>

        {favorites ? (
          <DropDown
            state={favorites}
            setState={() => setFavorites}
            placeHolder="Loja"
            mode="MODAL"
            onSelectItem={e => setSelectedStore(e)}
          />
        ) : null}

        <Input
          value={value}
          onChangeText={setValue}
          editable
          icon="dollar-sign"
          placeholder="R$ 0,00"
          placeholderTextColor={colors.greys.regular}
          keyboardType="numeric"
          containerStyle={styles.input}
        />

        <Input
          value={description}
          onChangeText={setDescription}
          editable
          icon="align-justify"
          placeholder="Descrição"
          placeholderTextColor={colors.greys.regular}
          containerStyle={styles.input}
        />

        <Button
          saveButton
          buttonStyle={{ marginTop: 24 }}
          text="Salvar"
          textStyle={[
            styles.textStyle,
            {
              textAlign: 'center',
              color: theme.button.text.color.primary,
              width: '100%',
            },
          ]}
          onPress={() => handleSave()}
        />
      </Container>
    </ScrollView>
  );
}
