import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { PathLocationStrategy , LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OfferComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularSvgIconModule 
  ],
  providers: [{provide:LocationStrategy,
             useClass:PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
