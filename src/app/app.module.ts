import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ServerService } from './server.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot()
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
