import api from './api';

const getList = async () => {
  const response = await api.get('/cronograma/obter?id=1');

  return response.data;
};

const deleteTask = async (id: number) => {
  const response = await api.delete(`/tarefa/excluir-tarefa?id=${id}`);

  return response.data;
};

export { getList, deleteTask };
