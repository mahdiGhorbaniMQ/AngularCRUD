import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,

  ],
  exports: [
    UserListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
