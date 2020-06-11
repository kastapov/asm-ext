import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './config';
import { AccessToken } from '../app/types/messaging/login/AccessToken';
import { loadFromStorage, saveIntoStorage } from './storage';

const TOKEN_NAME= 'token';

export function setToken(token) {
  saveIntoStorage(TOKEN_NAME, token);
}

export function getTokenHeader(): Promise<AccessToken> {
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
    return doTokenValidation(token).then(() => new AccessToken(token));
  }
}

function doTokenValidation(token: string): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2`,
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}

export async function invalidateToken(): Promise<any> {
  const token = await loadFromStorage(TOKEN_NAME);
  if (!token) {
    return Promise.resolve();
  } else {
    return doInvalidateToken(token);
  }
}

function doInvalidateToken(token: string): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2/token`,
    method: 'delete',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}


