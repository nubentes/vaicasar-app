export interface DTOLoja {
  id: number;
  nome: string;
  descricao: string;
  avaliacao: number;
  precoInicial?: number;
  precoFinal?: null;
  telefone: string;
  categoria: {
    id: number;
    descricao: string;
  };
  endereco?: {
    id: number;
    rua: string;
    bairro: string;
    cidade: string;
    estadoUF: string;
    cep: string;
    latitude: null;
    longitude: null;
  };
  favorito: boolean;
  urlFotoPerfil?: null;
  fotos?: [];
}
