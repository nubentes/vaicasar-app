import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import * as Yup from 'yup';
import { Calendar, DayProps } from '../../components/Calendar';
import { useTask } from '../../context/list';
import { Props } from '../../routes/app.tasks.routes';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { DTOCronograma } from '../../dtos/cronograma';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import colors from '../../styles/colors';
import { DropDown } from '../../components/DropDown';
import icons from '../../utils/icons';
import { DTOTarefa } from '../../dtos/tarefa';
import { Header } from '../../components/Header';
import { DTOLoja } from '../../dtos/loja';

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
});

export function Task({ navigation, route }: Props) {
  const { list, setList, stores } = useTask();
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
  const [favorites, setFavorites] = useState([]);

  const handleSave = async () => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório!'),
        value: Yup.number()
          .optional()
          .typeError('Informe valor numérico!')
          .positive('Valor deve ser maior que zero!'),
      });

      await schema.validate({ title, value });

      switch (type) {
        case 'add':
          const newElement: DTOTarefa = {
            id: task.id,
            titulo: title,
            dataPrevista: scheduledDate,
            dataConclusao: null,
            loja: store,
            descricao: description,
            finished: false,
            valor: value,
          };

          const tempList = [...list.tarefas];

          tempList.push(newElement);

          const newList: DTOCronograma = {
            id: list.id,
            dataPrevista: list.dataPrevista,
            tarefas: tempList,
          };

          setList(newList);

          break;

        case 'edit':
          const temp = list.tarefas.map(item => {
            if (item.id === task.id) {
              item.titulo = title;
              item.dataPrevista = scheduledDate;
              item.descricao = description;
              item.valor = value;

              return item;
            }

            return item;
          });

          const updatedList: DTOCronograma = {
            id: list.id,
            dataPrevista: list.dataPrevista,
            tarefas: temp,
          };

          setList(updatedList);
          break;
        default:
          break;
      }

      Alert.alert('Sucesso!', 'Informações foram salvas!');

      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa!', error.message);
      }
      Alert.alert('Erro', 'Tente novamente mais tarde!');
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
    const temp = stores.filter(s => s.favorito === true);

    const convert = temp.map(i => {
      const convertedItem = {
        label: i.nome,
        value: i.nome,
      };

      return convertedItem;
    });

    setFavorites(convert);
  };

  useEffect(() => {
    getFavorites();
  }, [stores]);

  return (
    <ScrollView>
      <Container>
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

        <DropDown
          state={favorites}
          setState={() => setFavorites}
          placeHolder="Loja"
        />

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
