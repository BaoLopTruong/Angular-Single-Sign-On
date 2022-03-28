import { Component, OnInit, NgZone, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tokenGetter } from 'src/app/app.module';
import { AuthService } from "../../shared/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  constructor(public authService: AuthService,
    public msalService: MsalService,private spinner: NgxSpinnerService,public ngZone: NgZone,  private activatedRoute:ActivatedRoute) {

// this.authService.beforeSignIn()

}





  ngOnInit(): void {





     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 3000);


   }

}



