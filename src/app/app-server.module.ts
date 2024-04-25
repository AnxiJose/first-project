import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    ServerModule,AppModule
  ],
  bootstrap:[AppComponent]
})
export class AppServerModule { }
