import { LoginCredentials } from '../app/types/messaging/login/LoginCredentials';
import { AccessToken } from '../app/types/messaging/login/AccessToken';
import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './common';

export function processLogin(credentials: LoginCredentials): AxiosPromise<AccessToken> {
  return doAuth(credentials);
}

function doAuth(credentials: LoginCredentials): AxiosPromise<AccessToken> {
  const oAuthParameters = {
    "client_id": 1,
    "redirect_uri": "https://asm.ca.com",
    "email": credentials.email,
    "password": credentials.password,
    "state": Math.floor(Math.random() * 100000000),
    "response_type": "code"
  }

  return axios({
    url: `${API_BASE}/oauth2/auth`,
    method: 'post',
    data: oAuthParameters
  });
}
