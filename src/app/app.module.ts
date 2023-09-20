import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ImageUrlComponent } from './image-url/image-url.component';

@NgModule({
    declarations: [
        AppComponent,
        AlbumComponent,
        ImageUrlComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
