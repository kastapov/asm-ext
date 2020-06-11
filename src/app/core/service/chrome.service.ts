import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../background/config';

@Injectable({
  providedIn: 'root'
})
export class ChromeService {

  constructor() { }

  openTab(link: string) {
    chrome.tabs.create({
      url: `${BASE_URL}/${link}`
    });
  }
}
