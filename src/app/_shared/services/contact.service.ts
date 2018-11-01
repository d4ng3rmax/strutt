import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

export interface IMessage {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private emailUrl = '/assets/contact.php';

  constructor( private http: Http ) { }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    // console.info( message );
    return this.http.post(this.emailUrl, message);
  }

}
