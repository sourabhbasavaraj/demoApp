import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HillstationComponent } from './hillstation/hillstation.component';
import { HomeComponent } from './home/home.component';
import { SkandagiriComponent } from './hillstation/skandagiri/skandagiri.component';
import { NandihillsComponent } from './hillstation/nandihills/nandihills.component';
import { DamsComponent } from './dams/dams.component';
import { DdComponent } from './dams/dd/dd.component';
import { MakaliComponent } from './dams/makali/makali.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HillstationComponent,
    HomeComponent,
    SkandagiriComponent,
    NandihillsComponent,
    DamsComponent,
    DdComponent,
    MakaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
