import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from 'src/app/shared/services/auth.service';



type ProfileType = {
  displayName?: string,
  givenName?: string,
  surname?: string,
  mail?:string,
  userPrincipalName?: string,
  id?: string

};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile!: ProfileType;
  aipRespone: string;
  photo: string;

  constructor(public authService: AuthService ,public router: Router,public msalService: MsalService,public http: HttpClient,

    public ngZone: NgZone) {

    }




    getProfile() {
      this.http.get("https://graph.microsoft.com/v1.0/me")
        .subscribe(profile => {
          this.profile = profile;
          console.log(profile)
        });
    }

  ngOnInit(): void {
    this.getProfile()
    this.checkEmail();
  }

checkEmail(){
  const abc = this.authService.userData.email;
  const res ='_outlook.com';
  if(abc.search(res) == -1){
  console.log("No");
  }
  else{
    console.log("Yes");
  }
}


}
