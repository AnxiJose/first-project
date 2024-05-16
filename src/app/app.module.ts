import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './shared/getToken.helper';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { appConfig } from './app.config';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule ,AppRoutingModule,CommonModule, BrowserModule,RouterModule, RouterOutlet,RouterLink,RouterLinkActive, ServerModule, HttpClientModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost"],
        disallowedRoutes: ["localhost/login/","localhost/signup"],
      },})
  ],
  providers: appConfig.providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
