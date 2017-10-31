import { Http } from '@angular/http';
import { GeoService } from './service/geo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseconfig } from '../environments/firebaseconfig';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-wUaUTgO5jQWJOMpG2kDq5W1t4tG1ZmQ'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GeoService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
