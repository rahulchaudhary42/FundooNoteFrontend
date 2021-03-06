import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 

export class AuthGuardService  implements CanActivate{
  
  constructor(private httpService: HttpService, private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(!!localStorage.getItem("token")){
      return true;
    }else{
      this.router.navigate(['/login'])
    }
  }

}

