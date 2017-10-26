import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GeoService } from './service/geo.service';
import { Component, OnInit } from '@angular/core';
import { Locate } from './service/modelo';
import 'rxjs/add/operator/map';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'

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
  getLatLng: Observable<any>;

  constructor(private geo: GeoService, public af: AngularFireDatabase) {
  }
  ngOnInit() {
    this.af.list('myLatLng').push({
      lat: -22.715459,
      lng: -43.555167
    }
    ).then((t: any) => console.log('dados gravados: ' + t.key))


  }

  getMyLat() {
    this.getLatLng = this.af.list('myLatLng').valueChanges();
    console.log("ooi: " + this.getLatLng);
  }
}
