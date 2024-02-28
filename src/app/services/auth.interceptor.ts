import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
 
  
  /*const token=loginService.getToken();
  if(token!=null){
    authReq=authReq.clone({
        setHeaders:{TOKEN_HEADER:`Bearer ${token}`},
    });
}*/
  //add the jwt token (localstorage) request
        let authReq=req;
        
        console.log("inside interceptor");
        const token=loginService.getToken();
        if(token!=null){
            /*authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
            });*/
            authReq = authReq.clone({
              setHeaders: {Authorization: `Bearer ${token}` },
              
            });
            console.log("header is set");
        }

        return next(authReq);
  //return next(req);
};
