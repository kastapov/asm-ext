export function saveIntoStorage(name: string, value: any): void {
  chrome.storage.local.set({[name]: value})
}

export function loadFromStorage(name: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    try {
      chrome.storage.local.get([name], data => {
        resolve(data[name]);
      })
    } catch (e) {
      reject(e);
    }
  });
}
