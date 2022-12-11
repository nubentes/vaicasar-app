import { DTOUsuario } from '../dtos/usuario';
import api from './api';

const getStores = async (params: DTOUsuario) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const response = await api.get('/loja/todos', config);

  return response.data;
};

export { getStores };
