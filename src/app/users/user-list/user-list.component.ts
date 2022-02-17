import { Component, OnInit } from '@angular/core';
import {UserModel as User} from "../model/user-model";
import {UserItemComponent} from "../user-item/user-item.component";
import {CrudService} from "../service/crud.service";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]=[];
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    for (var i=1;i<=this.crud.usersLength;i++) {
      var user: User = this.crud.readItem(i);
      this.users.push(user);
    }
  }
}
