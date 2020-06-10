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
        try {
          chrome.runtime.sendMessage(message, (response: IResponse) => {
            if (response.state == ResponseStateEnum.ERROR || response.state == ResponseStateEnum.FAIL) {
              this.zone.run(() => { observer.error(response.payload) });
            } else {
              this.zone.run(() => { observer.next(response.payload)});
            }
            this.zone.run(() => { observer.complete()});
          });
        } catch (e) {
          this.zone.run(() => { observer.error(e)});
        }
      });
  }
}
