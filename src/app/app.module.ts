import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientTestingModule} from "@angular/common/http/testing";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientTestingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
