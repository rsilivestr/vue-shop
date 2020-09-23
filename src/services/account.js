import axios from 'axios';
import 'regenerator-runtime/runtime';
// import { authHeader } from '../_helpers';

const API_URL = 'http://localhost:3000';

const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });

  return res.data;
};

const register = async (email, password, firstName = '') => {
  const res = await axios.post(`${API_URL}/register`, { email, password, firstName });

  return res.data;
};

export const accountService = {
  login,
  register,
};
