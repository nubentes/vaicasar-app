import moment from 'moment';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { Alert } from 'react-native';
import { DayProps } from '../components/Calendar';
import { DTOTimeline } from '../dtos/timeline';
import { getList } from '../services/list';

interface ProviderProps {
  children: ReactNode;
}

export interface StoreProps {
  name: string;
  category: string;
}
export interface TaskProps {
  id: number;
  titulo?: string | '';
  dataPrevista?: DayProps;
  dataConclusao?: DayProps | null;
  loja?: StoreProps | null;
  descricao?: string;
  valor?: string;
}

export interface TaskList {
  list: DTOTimeline;
  setList: React.Dispatch<React.SetStateAction<DTOTimeline>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskContext = createContext({} as TaskList);

function TaskProvider({ children }: ProviderProps) {
  const [list, setList] = useState<DTOTimeline>();
  const [loading, setLoading] = useState<boolean>(true);

  const getTasks = useCallback(async () => {
    try {
      const response: DTOTimeline = await getList();

      const formatDates = response.tarefas.map((item: TaskProps) => {
        const formattedDate: string = item.dataPrevista
          ? moment(item.dataPrevista).format('L')
          : moment().format('L');

        item.dataPrevista = {
          dateString: formattedDate,
          day: Number(moment(item.dataPrevista).format('D')),
          month: Number(moment(item.dataPrevista).format('M')),
          year: Number(moment(item.dataPrevista).format('Y')),
          timestamp: Number(moment(item.dataPrevista).unix()),
        };

        return item;
      });

      const formatList: DTOTimeline = {
        id: response.id,
        dataPrevista: response.dataPrevista,
        tarefas: formatDates,
      };

      setList(formatList);
    } catch (error) {
      // Alert.alert('Erro', 'Não foi possível carregar os dados!');
      setList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks, loading]);

  return (
    <TaskContext.Provider value={{ list, setList, loading, setLoading }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);

  const { list, setList, loading, setLoading } = context;

  return { list, setList, loading, setLoading };
}

export { TaskProvider, useTask };
