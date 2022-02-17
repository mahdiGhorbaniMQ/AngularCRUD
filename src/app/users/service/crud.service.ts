import { Injectable } from '@angular/core';
import {InformationService} from "../information.service";
import {UserModel as User} from "../model/user-model";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private information:InformationService) { }
  creatItem(user:User){
    this.information.users.push(user)
  }
  readItem(id:number):User{
    for(let index in this.information.users){
      if (this.information.users[index].id==id)
        return this.information.users[index];
    }
    var nulluser:User={firstName:"",lastName:"",userName:"",eMail:"",phoneNumber:"",id:-1}
    return nulluser;
  }
  updateItem(user:User):boolean{
    for(let index in this.information.users){
      if (this.information.users[index].id==user.id) {
        this.information.users[index]=user;
        return true;
      }
    }
    return false;
  }
  deleteItem(id:number):boolean{
    for(let index in this.information.users){
      if (this.information.users[index].id==id) {
        this.information.users.splice(Number(index),1);
        return true;
      }
    }
    return false;
  }
  get usersLength():number{
    return this.information.users.length;
  }
}
