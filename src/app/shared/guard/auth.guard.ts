import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
     private authService: AuthService ,
      private msalService: MsalService,
      private http: HttpClient) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //option1:
      if(this.authService.isLoggedIn){

        return true;
      }
      else{
        return this.router.parseUrl("/sign-in");
      }
    }

   //option2:
   //guard wwith firebase
    // if(this.authService.isLoggedInn !== true) {
    //   this.router.navigate(['/sign-in'])
    // }


    //guard wwith MS
    // if (this.http.get("https://graph.microsoft.com/v1.0/me")== null) {
    //   console.log('not logged in!')
    //   this.router.navigate(['public-page'])

    // }




    //option3:
  //   if(this.authService.isLoggedIn !== true ){
  //     this.router.navigate(['/sign-in'])
  //   }
  //   return true;

  // }

  //option4:
  //   if(this.authService.CheckSignin() !== null){
  //     return this.router.navigate(['/dashboard'])
  //   }
  //   else{
  //     return this.router.navigate(['/sign-in'])
  //   }
  // }
//   if (this.authService.isAuthenticate) {
//     this.router.navigate(['/dashboard'])
//     return true;
//   } else {

//     this.router.navigate(['/sign-in'])
//   }
// }



  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if(this.authService.isLoggedIn !== true) {
  //     this.router.navigate(['/sign-in'])
  //   }
  //   return true;
  // }

}
