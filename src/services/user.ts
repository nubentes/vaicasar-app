import { DTOUsuario } from '../dtos/usuario';
import api from './api';

const doLogin = async (params: DTOUsuario) => {
  const response = await api.post('/usuario/logar', params);

  return response.data;
};

const createAccount = async (params: DTOUsuario) => {
  const response = await api.put('/usuario/criar', { params });

  return response.data;
};

const updateAccount = async (params: DTOUsuario) => {
  const response = await api.post('/usuario/editar', { params });

  return response.data;
};

const getUser = async (params: DTOUsuario) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const response = await api.get(`/pessoa?idUsuario=${params.id}`, config);

  return response.data;
};

export { doLogin, createAccount, updateAccount, getUser };
