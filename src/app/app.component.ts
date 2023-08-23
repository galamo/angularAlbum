import { Component } from '@angular/core';

enum Messages {
    NO_ALBUMS = "NO ALBUMS IN SYSTEM",
    YEA_WE_HAVE_ALBUMS = "YEA WE HAVE ALBUMS"
}

@Component({
    selector: 'app-root', // <app-root><app-root/>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'this is HEADER!!!!';
    public albumMessage: Messages;
    public numberOfAlbums: number

    constructor() {
        this.numberOfAlbums = 0;
        this.albumMessage = Messages.NO_ALBUMS
    }

    increaseAlbums() {
        this.numberOfAlbums = this.numberOfAlbums + 1
        if(this.numberOfAlbums > 0 ){
            this.albumMessage = Messages.YEA_WE_HAVE_ALBUMS
        }
    }
}
