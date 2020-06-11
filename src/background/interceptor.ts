import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getToken, removeToken } from './token';

export function initInterceptors() {
  axios.interceptors.response.use(c => c, (error: AxiosError) => {
    if (error.response.status === 403) {
      removeToken();
    }
    return Promise.reject(error);
  });

  axios.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
    return getToken().then((token) => {
      requestConfig.headers['Authorization'] = `Bearer ${token}`;
      return Promise.resolve(requestConfig);
    });
  });
}
