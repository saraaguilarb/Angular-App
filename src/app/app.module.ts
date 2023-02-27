import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';
import { DiscographyComponent } from './discography/discography.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    GalleryImagesComponent,
    DiscographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
