import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerPdpModule } from './beer-pdp/beer-pdp.module';
import { BeerPlpModule } from './beer-plp/beer-plp.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BeerPdpModule,
    BeerPlpModule,
    RouterModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
