import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log(
      `(From service we created) A server status changed, new status : ${status}`
    );
  }
}
