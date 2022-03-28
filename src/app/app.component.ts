import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import * as firebase from 'firebase/app';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-firebase-auth-login';
  public show:boolean = false;
  gettoken: string;
  constructor(public authService: AuthService, public ngZone: NgZone, private spinner: NgxSpinnerService) {


  }



  ngOnInit(){

  //  console.log(this.authService.GetToken())

       /** spinner starts on init */
       this.spinner.show();

       setTimeout(() => {
         /** spinner ends after 5 seconds */
         this.spinner.hide();
       }, 3000);
     }



}

