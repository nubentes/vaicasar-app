import api from './api';

const getCategories = async () => {
  const response = await api.get('/categoria/todos');

  return response.data;
};

export { getCategories };
