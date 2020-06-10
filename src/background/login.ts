import { LoginCredentials } from '../app/types/messaging/login/LoginCredentials';
import { AccessToken } from '../app/types/messaging/login/AccessToken';
import axios, { AxiosPromise } from 'axios';
import { API_BASE } from './config';
import { setToken } from './token';

export function processLogin(credentials: LoginCredentials): AxiosPromise<AccessToken> {
  return doAuth(credentials)
    .then(obtainAccessToken)
    .then(response => {
      setToken(response.data.access_token);
      return response;
  });
}

function doAuth(credentials: LoginCredentials): AxiosPromise<AccessToken> {
  const oAuthParameters = {
    'client_id': 1,
    'redirect_uri': 'https://asm.ca.com',
    'email': credentials.email,
    'password': credentials.password,
    'state': Math.floor(Math.random() * 100000000),
    'response_type': 'code'
  }

  return axios({
    url: `${API_BASE}/oauth2/authdd`,
    method: 'post',
    data: oAuthParameters
  });
}

function obtainAccessToken({data: authResponse}): AxiosPromise<AccessToken> {
  if (authResponse.error) {
    return Promise.reject(authResponse);
  }

  const tokenRequest = {
    'grant_type': 'authorization_code',
    'client_id': 1,
    'client_secret': '',
    'code': authResponse.url.split('code=')[1],
    'redirect_uri': 'https://asm.ca.com',
  }

  return axios({
    url: `${API_BASE}/oauth2/token`,
    method: 'post',
    data: tokenRequest
  });
}
