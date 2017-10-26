import { Locate } from './modelo';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class GeoService {
    constructor(private http: Http, af: AngularFireDatabase) {
    }


    getLocation(): Observable<any> {
        return this.http.get('https://testez-fbf7b.firebaseio.com/sendLatLng.json').map(result => result.json());
    }
    setLocation(): Observable<any> {
        return;
    }
}