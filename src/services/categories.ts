import { DTOUsuario } from '../dtos/usuario';
import api from './api';

const getCategories = async (params: DTOUsuario) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const response = await api.get('/categoria/todos', config);

  return response.data;
};

export { getCategories };
