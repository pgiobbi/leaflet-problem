import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, polygon, Layer } from 'leaflet';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  layers: Layer[] = [];

  constructor(
    private serverService: ServerService
  ) {
    this.serverService.addPolygon = this.addPolygon;
  }

  options = {
  	layers: [
  		tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  	],
  	zoom: 5,
  	center: latLng(42, 2)
  };


  addPolygon () {
    console.log("I am in addPolygon in MapComponent");
    this.layers = [
      polygon( [[ 43, 3 ], [ 42, 0 ], [ 44, 1 ]] )
    ];
  };

  resetLayers () {
    console.log("Resetting layers")
    this.layers = [];
  }

}
