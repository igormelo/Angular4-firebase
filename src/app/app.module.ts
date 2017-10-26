import { Http } from '@angular/http';
import { GeoService } from './service/geo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
    AngularFireModule.initializeApp(firebaseconfig, 'mylocation'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-wUaUTgO5jQWJOMpG2kDq5W1t4tG1ZmQ'
    })
  ],
  providers: [GeoService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
