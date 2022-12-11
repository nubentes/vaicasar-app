import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-204-196-202.compute-1.amazonaws.com:8050',
});

export default api;
