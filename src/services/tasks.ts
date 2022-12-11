import api from './api';

const deleteTask = async (id: number) => {
  const response = await api.delete(`/tarefa/excluir-tarefa?id=${id}`);

  return response.data;
};

export { deleteTask };
