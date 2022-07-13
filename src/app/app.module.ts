import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgpSortModule } from "ngp-sort-pipe";
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    AppComponent,
    ProductContentComponent,
    ProductListComponent,
    CarouselSliderComponent
  ],
  imports: [
    BrowserModule,
    NgpSortModule,
    SlickCarouselModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
