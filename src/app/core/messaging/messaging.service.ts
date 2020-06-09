import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from '../../types/messaging/IMessage';
import { IResponse } from '../../types/messaging/IResponse';
import { ResponseStateEnum } from '../../types/messaging/ResponseStateEnum';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private zone: NgZone) {
  }

  send(message: IMessage): Observable<any> {
    return new Observable((observer) => {
      chrome.runtime.sendMessage(message, (response: IResponse) => {
        this.zone.run(() => {
          if (response.state == ResponseStateEnum.ERROR || response.state == ResponseStateEnum.FAIL) {
            observer.error(response.payload);
          } else {
            observer.next(response.payload);
          }
          observer.complete();
        });
      });
    });
  }
}
