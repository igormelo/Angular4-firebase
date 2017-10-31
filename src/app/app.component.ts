import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GeoService } from './service/geo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Locate } from './service/modelo';
import 'rxjs/add/operator/map';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { element } from 'protractor';
import { AgmCoreModule } from '@agm/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  locate: Locate;
  lat: number;
  lng: number;
  res: any[];
  private obj;
  getLatLng: Observable<any>;

  constructor(private geo: GeoService, public af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.getUserLocation()
  }

  getMyLat() {
    const item = this.af.list('myLatLng').valueChanges().subscribe(res => {
      this.res = res;
      this.lat = this.res[0].lat;
      this.lng = this.res[0].lng;
    });
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.af.list('myLatLng').push({
          lat: this.lat,
          lng: this.lng
        })
      })
    }

  }
}
