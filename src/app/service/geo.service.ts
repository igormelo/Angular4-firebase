import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as GeoFire from "geofire";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable()
export class GeoService {
    geoFire: any;
    dbRef: any;
    hits = new BehaviorSubject([])
    constructor(private af: AngularFireDatabase) {
        this.dbRef = firebase.database().ref().child('/myLatLng');
        this.geoFire = new GeoFire(this.dbRef);
    }
    setLocation(key: string, coords: Array<number>) {
        this.geoFire.set(key, coords)
            .then(_ => console.log('location updated'))
            .catch(err => console.log(err))
    }
    getLocation(radius: number, coords: Array<number>) {
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', (key, location, distance) => {
                let hit = {
                    location: location,
                    distance: distance
                }
                let currentHits = this.hits.value
                currentHits.push(hit)
                this.hits.next(currentHits)
            })
    }
}
