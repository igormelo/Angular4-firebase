import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GeoService } from './service/geo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
  lat: number;
  lng: number;
  res: any[];
  listing: any;
  constructor(public af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.myLoc();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.af.list('myLatLng').push({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    }
  }
  myLoc() {
    const item = this.af.list('myLatLng').valueChanges().subscribe(res => {
      this.res = res;
      this.lat = this.res[1].lat;
      this.lng = this.res[1].lng;
    });
  }
}
