import { DayProps } from '../components/Calendar';
import { DTOLoja } from './loja';

export interface DTOTarefa {
  id: number;
  titulo?: string | '';
  dataPrevista?: DayProps;
  dataConclusao?: DayProps | null;
  loja?: DTOLoja | null;
  descricao?: string;
  valor?: string;
}
