import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenService.hasToken())
      return true;
    else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
