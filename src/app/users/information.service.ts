import { Injectable } from '@angular/core';
import {UserModel as User} from "./model/user-model";
@Injectable({
  providedIn: 'root'
})
export class InformationService {
  users:User[]=[];
  constructor() {
    this.users=[
      {
        firstName:"mahdi",
        lastName:"ghorbani",
        userName:"admin",
        eMail:"mahdi@gmail.com",
        phoneNumber:"123456789",
        id:1
      },
      {
        firstName:"mohammad",
        lastName:"ghorbani",
        userName:"costumer",
        eMail:"mohammad@gmail.com",
        phoneNumber:"987654321",
        id:2
      }
    ]
  }
}
