import moment from 'moment';

export const tasksData = [
  // Mock para testes
  {
    id: 1,
    titulo: 'Tarefa 1',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 1',
    valor: '4000',
  },
  {
    id: 2,
    titulo: 'Tarefa 2',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 2',
    valor: '4000',
  },
  {
    id: 3,
    titulo: 'Tarefa 3',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 3',
    valor: '4000',
  },
  {
    id: 4,
    titulo: 'Tarefa 4',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 4',
    valor: '4000',
  },
  {
    id: 5,
    titulo: 'Tarefa 5',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 5',
    valor: '4000',
  },
  {
    id: 6,
    titulo: 'Tarefa 6',
    dataPrevista: {
      dateString: moment().format('L'),
      day: moment().date(),
      month: moment().month(),
      year: moment().year(),
      timestamp: moment().unix(),
    },
    dataConclusao: null,
    loja: null,
    descricao: 'Descrição 6',
    valor: '4000',
  },
];