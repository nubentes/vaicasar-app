import { DTOTarefa } from '../dtos/tarefa';
import api from './api';

const getTask = async params => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const response = await api.get(`/tarefa?id=${params.id}`, config);

  return response.data;
};

const createTask = async (params: DTOTarefa, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.post('/tarefa/criar-tarefa', params, config);

  return response.data;
};

const editTask = async (params: DTOTarefa, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.put('/tarefa/editar', params, config);

  return response.data;
};

const deleteTask = async params => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };

  const response = await api.delete(`/tarefa?id=${params.id}`, config);

  return response.data;
};

export { getTask, createTask, editTask, deleteTask };
