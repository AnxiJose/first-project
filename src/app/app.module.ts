import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { config } from './app.config.server';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './shared/getToken.helper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appConfig } from './app.config';



@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,CommonModule, RouterModule, RouterOutlet,RouterLink,RouterLinkActive, BrowserModule, ServerModule, HttpClientModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },})
  ],
  providers: appConfig.providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
