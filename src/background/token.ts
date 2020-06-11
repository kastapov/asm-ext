import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './config';
import { AccessToken } from '../app/types/messaging/login/AccessToken';
import { loadFromStorage, saveIntoStorage } from './storage';

const TOKEN_NAME= 'token';

export function setToken(token) {
  saveIntoStorage(TOKEN_NAME, token);
}

export function getToken(): Promise<string> {
  return loadFromStorage(TOKEN_NAME);
}

export function removeToken() {
  saveIntoStorage(TOKEN_NAME, null);
}

export async function validateToken(): Promise<AccessToken> {
  const token = await loadFromStorage(TOKEN_NAME);
  if (!token) {
    return Promise.reject();
  } else {
    return doTokenValidation().then(() => new AccessToken(token));
  }
}

function doTokenValidation(): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2`,
    method: 'get',
  });
}

export async function invalidateToken(): Promise<any> {
  const token = await loadFromStorage(TOKEN_NAME);
  if (!token) {
    return Promise.resolve();
  } else {
    return doInvalidateToken();
  }
}

function doInvalidateToken(): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2/token`,
    method: 'delete',
  });
}


