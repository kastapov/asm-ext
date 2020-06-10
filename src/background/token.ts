import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './config';
import { AccessToken } from '../app/types/messaging/login/AccessToken';
import { loadFromStorage, saveIntoStorage } from './storage';

const TOKEN_NAME= 'token';

export function setToken(token) {
  saveIntoStorage(TOKEN_NAME, `Bearer ${token}`);
}

export function getTokenHeader(): Promise<AccessToken> {
  return loadFromStorage(TOKEN_NAME);
}

export function removeToken() {
  saveIntoStorage(TOKEN_NAME, null);
}

export async function validateToken(): Promise<AccessToken> {
  const tokenHeader = await loadFromStorage(TOKEN_NAME);
  if (!tokenHeader) {
    return Promise.reject();
  } else {
    return doTokenValidation(tokenHeader).then(() => new AccessToken(tokenHeader));
  }
}

function doTokenValidation(tokenHeader: string): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2`,
    method: 'get',
    headers: {
      'Authorization': tokenHeader,
    },
  });
}
