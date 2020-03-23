import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppSidenavContentComponent } from './app-sidenav-content/app-sidenav-content.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-router.module';
import { CharacterModule } from './character/character.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppSidenavContentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CharacterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
