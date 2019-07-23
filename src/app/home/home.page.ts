/// <reference types="@types/googlemaps" />
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor() {}
  google;
  infowindow: any;
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  map: any;
  ionViewDidEnter() {
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }
}
