/**
 * Arquivo de configuração de acesso a API.
 *
 * Tecnologia usada: axios
 */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
