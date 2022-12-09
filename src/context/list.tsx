import moment from 'moment';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { DTOCategoria } from '../dtos/categoria';
import { DTOCronograma } from '../dtos/cronograma';
import { DTOLoja } from '../dtos/loja';
import { DTOTarefa } from '../dtos/tarefa';
import { categoriesData } from '../mock/categorias';
import { storesData } from '../mock/lojas';
import { getList } from '../services/list';

interface ProviderProps {
  children: ReactNode;
}

export interface TaskList {
  list: DTOCronograma;
  setList: React.Dispatch<React.SetStateAction<DTOCronograma>>;
  stores: DTOLoja[];
  setStores: (item) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  filterItem: string;
  setFilterItem: string;
  categories: DTOCategoria[];
  setCategories: (item) => void;
}

const TaskContext = createContext({} as TaskList);

function TaskProvider({ children }: ProviderProps) {
  const [list, setList] = useState<DTOCronograma>();
  const [loading, setLoading] = useState<boolean>(true);
  const [stores, setStores] = useState<DTOLoja[]>(storesData);
  const [categories, setCategories] = useState(categoriesData);
  const [filterItem, setFilterItem] = useState(null);

  const getTasks = useCallback(async () => {
    try {
      const response: DTOCronograma = await getList();

      const formatDates = response.tarefas.map((item: DTOTarefa) => {
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

      const formatList: DTOCronograma = {
        id_cronograma: response.id_cronograma,
        dataPrevista: response.dataPrevista,
        tarefas: formatDates,
      };

      setList(formatList);
    } catch (error) {
      // Alert.alert('Erro', 'Não foi possível carregar os dados!');
      // setList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks, loading]);

  return (
    <TaskContext.Provider
      value={{
        list,
        setList,
        loading,
        setLoading,
        stores,
        setStores,
        filterItem,
        setFilterItem,
        categories,
        setCategories,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);

  const {
    list,
    setList,
    loading,
    setLoading,
    stores,
    setStores,
    filterItem,
    setFilterItem,
    categories,
    setCategories,
  } = context;

  return {
    list,
    setList,
    loading,
    setLoading,
    stores,
    setStores,
    filterItem,
    setFilterItem,
    categories,
    setCategories,
  };
}

export { TaskProvider, useTask };
