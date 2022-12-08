import { TaskProps } from '../context/list';

export interface DTOCronograma {
  id_cronograma: number;
  dataPrevista: string;
  tarefas: TaskProps[];
}
