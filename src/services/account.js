import axios from 'axios';
import 'regenerator-runtime/runtime';
// import { authHeader } from '../_helpers';

const API_URL = 'http://localhost:3000';

const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  const data = await res.json();

  return data.token;
};

const register = async (email, password, firstName = '') => {
  const res = await axios.post(`${API_URL}/register`, { email, password, firstName });
  const data = await res.json();

  return data.token;
};

export const accountService = {
  login,
  register,
};
