import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './config';
import { AccessToken } from '../app/types/messaging/login/AccessToken';

let tokenHeader: string;

export function getTokenHeader() {
  return tokenHeader;
}

export function setToken(token) {
  tokenHeader = `Bearer ${token}`;
}

export function removeToken() {
  tokenHeader = null;
}

export function validateToken(): Promise<any> {
  if (!tokenHeader) {
    return Promise.reject();
  } else {
    return doTokenValidation().then(() => new AccessToken(tokenHeader));
  }
}

function doTokenValidation(): AxiosPromise {
  return axios({
    url: `${API_BASE}/oauth2`,
    method: 'get',
    headers: {
      'Authorization': tokenHeader,
    },
  });
}
