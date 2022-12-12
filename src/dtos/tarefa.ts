import { DayProps } from '../components/Calendar';
import { DTOLoja } from './loja';

export interface DTOTarefa {
  idCronograma: number;
  tarefa: {
    titulo: string | '';
    dataPrevista: DayProps;
    dataConclusao?: DayProps | null;
    loja?: DTOLoja | null;
    descricao: string;
    valor?: string;
  };
}
