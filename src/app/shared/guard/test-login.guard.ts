import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestLoginGuard implements CanActivate {
  constructor(private msalService: MsalService, public router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.msalService.instance.getActiveAccount() == null) {
        console.log('not logged in!')
        this.router.navigate(['sign-in'])
        return false;

      }
    return true;
  }

}
