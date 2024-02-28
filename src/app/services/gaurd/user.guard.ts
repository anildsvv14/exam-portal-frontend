import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';

export const userGuard: CanActivateFn = (route, state) => {
  const loginServce=inject(LoginService);
  const router=inject(Router);
  if(loginServce.isLoggedIn() && loginServce.getUserRole()=="NORMAL"){
    return true;
  } else if(loginServce.isLoggedIn() && loginServce.getUserRole()=="ADMIN"){
    router.navigate(['admin']);
    return true;
  }
  router.navigate(['login']);
  return false;
};
