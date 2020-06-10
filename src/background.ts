import { ActionEnum } from './app/types/messaging/ActionEnum';
import { processLogin } from './background/login';
import { BackgroundResponse } from './app/types/messaging/BacgroundResponse';
import { validateToken } from './background/token';
import { registerInterceptor } from './background/config';

registerInterceptor();

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
  return ({data}) => {
    if (data.error) {
      sendResponse(BackgroundResponse.ERROR(data));
    } else {
      sendResponse(BackgroundResponse.OK(data));
    }
  }
}
