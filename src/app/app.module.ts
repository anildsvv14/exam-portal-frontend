/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginService } from '../app/services/login.service';
import { AuthInterceptor } from '../app/services/auth.interceptor';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
 
})
export class AppModule { }*/