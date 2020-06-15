import { ActionEnum } from './app/types/messaging/ActionEnum';
import { processLogin } from './background/login';
import { BackgroundResponse } from './app/types/messaging/BacgroundResponse';
import { invalidateToken, validateToken } from './background/token';
import { initInterceptors } from './background/interceptor';
import { loadConfig, saveConfig } from './background/config';
import { BackgroundStatPayload } from './app/types/messaging/stat/BackgroundStatPayload';
import { BackgroundStatusEnum } from './app/types/messaging/stat/BackgroundStatusEnum';

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
    case (ActionEnum.UPDATE_STAT_MOCK): {
      updateStatBadge(message.payload)
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

function updateStatBadge(payload: BackgroundStatPayload) {
  if (payload.number > 0) {
    if (payload.status === BackgroundStatusEnum.OK) {
      chrome.browserAction.setBadgeBackgroundColor({color: '#4caf50'});
    } else {
      chrome.browserAction.setBadgeBackgroundColor({color: '#f44336'});
    }
    chrome.browserAction.setBadgeText({text: String(payload.number)});
  } else {
    chrome.browserAction.setBadgeText({text: ''});
  }
  return Promise.resolve();
}
