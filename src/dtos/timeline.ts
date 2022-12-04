import { TaskProps } from '../context/list';

export interface DTOTimeline {
  id: number;
  dataPrevista: string;
  tarefas: TaskProps[];
}
