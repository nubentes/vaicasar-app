import React, { useState } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import { Calendar, DayProps } from '../../components/Calendar';
import { TaskProps, useTask } from '../../context/list';
import { Props } from '../../routes/app.stack.routes';

import { Container, Info } from './styles';
import { Input } from '../../components/Input';
import { DTOTimeline } from '../../dtos/timeline';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import colors from '../../styles/colors';
import { DropDown } from '../../components/DropDown';
import icons from '../../utils/icons';

const styles = StyleSheet.create({
  button: {
    margin: 24,
  },
  textStyle: {
    width: 303,
    fontSize: theme.input.text.fontSize,
    fontFamily: theme.input.text.fontFamily,
    color: theme.colors.black,
  },
});

export default function Task({ navigation, route }: Props) {
  const { list, setList } = useTask();
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
  const [value, setValue] = useState(task?.valor || '');
  const [store, setStore] = useState([
    {
      label: 'Loja 1',
      value: 'Buffet',
    },
    {
      label: 'Loja 2',
      value: 'Decoração',
    },
    {
      label: 'Loja 3',
      value: 'Festa',
    },
  ]);
  const [description, setDescription] = useState<string>(task?.descricao || '');

  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    try {
      switch (type) {
        case 'add':
          const newElement: TaskProps = {
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

          const newList: DTOTimeline = {
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

          const updatedList: DTOTimeline = {
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

  const customWidth = Dimensions.get('screen').width - 48;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info>
          <Input
            value={title}
            onChangeText={setTitle}
            editable
            icon="italic"
            placeholder="Título"
          />

          <Button
            buttonStyle={[
              styles.button,
              { backgroundColor: theme.input.background, width: customWidth },
            ]}
            text={scheduledDate.dateString || 'Data prevista'}
            textStyle={styles.textStyle}
            icon={{ name: icons.calendar, color: theme.icon.button.primary }}
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

          <DropDown state={store} setState={() => setStore} />

          <Input
            value={value.toString()}
            onChangeText={setValue}
            editable
            icon="dollar-sign"
            placeholder="R$ 0,00"
          />

          <Input
            value={description}
            onChangeText={setDescription}
            editable
            icon="align-justify"
            placeholder="Descrição"
          />

          <Button
            buttonStyle={[styles.button]}
            text="Salvar"
            textStyle={[
              styles.textStyle,
              { textAlign: 'center', color: theme.button.text.color.primary },
            ]}
            onPress={() => handleSave()}
          />
        </Info>
      </ScrollView>
    </Container>
  );
}
