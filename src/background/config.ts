import { loadFromStorage, saveIntoStorage } from './storage';
import { Config } from '../app/types/config/Config';

const CONFIG_NAME = 'config';

export function saveConfig(config: Config) {
  saveIntoStorage(CONFIG_NAME, config);
  return Promise.resolve(config);
}

export async function loadConfig(): Promise<Config> {
  const config = await loadFromStorage(CONFIG_NAME);
  if (!config) {
    return Promise.reject();
  }
  return config;
}
