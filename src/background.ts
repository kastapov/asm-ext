import { ActionEnum } from './app/types/messaging/ActionEnum';
import { processLogin } from './background/login';
import { BackgroundResponse } from './app/types/messaging/BacgroundResponse';
import { removeToken, validateToken } from './background/token';
import axios, { AxiosResponse } from 'axios';

axios.interceptors.response.use(c => c, (error) => {
  if (error.response.status === 403) {
    removeToken();
  }
  return Promise.reject(error);
});

chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(message, sender, sendResponse) {
  switch (message.action) {
    case (ActionEnum.LOGIN): {
      processLogin(message.payload)
        .then(sendWrappedResponse(sendResponse))
        .catch((response) => {
          sendResponse(BackgroundResponse.FAIL(response));
        });
      return true;
    }
    case (ActionEnum.CHECK_LOGIN): {
      validateToken()
        .then(sendWrappedResponse(sendResponse))
        .catch((response) => {
          sendResponse(BackgroundResponse.FAIL(response));
        });
      return true;
    }
  }
}

function sendWrappedResponse(sendResponse) {
  return (response) => {
    if (response.data?.error) {
      sendResponse(BackgroundResponse.ERROR(response.data));
    } else {
      sendResponse(BackgroundResponse.OK(response.data || response));
    }
  }
}
