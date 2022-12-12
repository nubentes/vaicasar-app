import { DTOUsuario } from '../dtos/usuario';
import api from './api';

const getTimeline = async (params: DTOUsuario) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const response = await api.get(`/cronograma/obter?id=${params.id}`, config);

  return response.data;
};

const createTimeline = async (params, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.post('/cronograma/criar', params, config);

  return response.data;
};

export { getTimeline, createTimeline };
