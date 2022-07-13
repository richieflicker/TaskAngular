import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6"},
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lanisbkyuyltvwegnrgd"},
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"},
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"},
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"},
    {img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"},
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  slickInit() {
    console.log('slick initialized');
  }
}
