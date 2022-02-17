import {Component, Input, OnInit} from '@angular/core';
import {UserModel as User} from "../model/user-model";
import {CrudService} from "../service/crud.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit{

  @Input("userID") ID!:number;
  user!:User;

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.user=this.crud.readItem(this.ID);
  }

  delete(){
    this.crud.deleteItem(this.ID);
  }
}
