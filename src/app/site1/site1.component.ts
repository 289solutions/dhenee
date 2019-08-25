import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site1',
  templateUrl: './site1.component.html',
  styleUrls: ['./site1.component.scss']
})
export class Site1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageObject: Array<object> = [{
    image: './assets/image/FloorBasement.png',
    thumbImage: './assets/image/FloorBasement.png',
    alt: 'alt',
    title: 'Semi Basement'
  }, {
    image: './assets/image/FloorGround.png',
    thumbImage: './assets/image/FloorGround.png',
    alt: 'alt',
    title: 'Ground Floor'
  }, {
    image: './assets/image/FloorFirst.png',
    thumbImage: './assets/image/FloorFirst.png',
    alt: 'alt',
    title: 'First Floor'
  }, {
    image: './assets/image/FloorSecond.png',
    thumbImage: './assets/image/FloorSecond.png',
    alt: 'alt',
    title: 'Second Floor'
  }, {
    image: './assets/image/rapti-building1.jpg',
    thumbImage: './assets/image/rapti-building1.jpg',
    alt: 'alt',
    title: 'Building'
  }, {
    image: './assets/image/rapti-building2.jpg',
    thumbImage: './assets/image/rapti-building2.jpg',
    alt: 'alt',
    title: 'Building'
  }, {
    image: './assets/image/rapti-front road.jpg',
    thumbImage: './assets/image/rapti-front road.jpg',
    alt: 'alt',
    title: 'Front Road'
  },{
    image: './assets/image/Rapti-basement.jpg',
    thumbImage: './assets/image/Rapti-basement.jpg',
    alt: 'alt',
    title: 'Basement'
  },
];

}
