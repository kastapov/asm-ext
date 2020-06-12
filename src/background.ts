import { ActionEnum } from './app/types/messaging/ActionEnum';
import { processLogin } from './background/login';
import { BackgroundResponse } from './app/types/messaging/BacgroundResponse';
import { invalidateToken, validateToken } from './background/token';
import { initInterceptors } from './background/interceptor';
import { loadConfig, saveConfig } from './background/config';

initInterceptors();

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
    case (ActionEnum.LOGOUT): {
      invalidateToken()
        .then(sendWrappedResponse(sendResponse))
        .catch((response) => {
          sendResponse(BackgroundResponse.FAIL(response));
        });
      return true;
    }
    case (ActionEnum.SAVE_CONFIG): {
      saveConfig(message.payload)
        .then(sendWrappedResponse(sendResponse))
        .catch((response) => {
          sendResponse(BackgroundResponse.FAIL(response));
        });
      return true;
    }
    case (ActionEnum.LOAD_CONFIG): {
      loadConfig()
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
      sendResponse(BackgroundResponse.OK(response?.data || response));
    }
  }
}
