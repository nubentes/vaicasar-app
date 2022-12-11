export interface DTOLoja {
  nome: string;
  descricao: string;
  avaliacao: number;
  categoria: {
    id: number;
    descricao: string;
  };
  favorito: boolean;
  img: string;
  sobre: string;
}
