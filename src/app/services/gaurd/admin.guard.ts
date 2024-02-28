import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginServce=inject(LoginService);
  const router=inject(Router);
  if(loginServce.isLoggedIn() && loginServce.getUserRole()=="ADMIN"){
    return true;
  } else if(loginServce.isLoggedIn() && loginServce.getUserRole()=="NORMAL"){
    router.navigate(['user']);
    return true;
  }
  router.navigate(['login']);
  return false;
  
};
