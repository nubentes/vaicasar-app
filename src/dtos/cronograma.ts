import { DTOTarefa } from './tarefa';

export interface DTOCronograma {
  id: number;
  dataPrevista: string;
  tarefas: DTOTarefa[];
  diasRestantes?: number;
}
