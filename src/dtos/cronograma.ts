import { DTOTarefa } from './tarefa';

export interface DTOCronograma {
  id_cronograma: number;
  dataPrevista: string;
  tarefas: DTOTarefa[];
  diasRestantes?: number;
}
