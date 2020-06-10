import axios from 'axios';
import { removeToken } from './token';

export const API_BASE = 'http://api.asm.ca.com/v3';

export function registerInterceptor() {
  axios.interceptors.response.use(c => c, (error) => {
    if (error.response.status === 403) {
      removeToken();
    }
    return Promise.reject(error);
  });
}
