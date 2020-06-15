import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from '../../types/messaging/IMessage';
import { IResponse } from '../../types/messaging/IResponse';
import { ResponseStateEnum } from '../../types/messaging/ResponseStateEnum';
import { NgProgress } from 'ngx-progressbar';
import { Message } from '../../types/messaging/Message';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private zone: NgZone, private ngProgress: NgProgress) {
  }

  send(message: IMessage): Observable<any> {
    this.ngProgress.ref().start();
    return new Observable((observer) => {
      try {
        chrome.runtime.sendMessage(message, (response: IResponse) => {
          this.zone.run(() => {
            if (!response || response.state == ResponseStateEnum.ERROR || response.state == ResponseStateEnum.FAIL) {
              observer.error(response?.payload);
            } else {
              observer.next(response.payload);
            }
            observer.complete();
            this.ngProgress.ref().complete();
          });
        });
      } catch (e) {
        this.zone.run(() => {
          observer.error(e);
          this.ngProgress.ref().complete();
        });
      }
    });
  }

  fireAndForget(message: Message) {
    chrome.runtime.sendMessage(message);
  }
}
