import { Component } from '@angular/core';

enum Messages {
    NO_ALBUMS = "NO ALBUMS IN SYSTEM",
    YEA_WE_HAVE_ALBUMS = "YEA WE HAVE ALBUMS"
}
type Album = {
    name: string,
    description: string
    pictures?: Array<string>,
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
    public albums: Array<Album> = []
    public albumsStrings: string
    public showAlbums: boolean = false;

    constructor() {
        this.numberOfAlbums = 0;
        this.albumMessage = Messages.NO_ALBUMS
        const data = [
            { name: "Critim", description: "Tomer is traveling to Critim with her frineds from army" },
            { name: "London", description: "Rafi having fun in London" },
            { name: "Amsterdam", description: "Snir is enjoyint in Amsterdam, Yuval also joint" }]
        this.albums = data;
        this.albumsStrings = JSON.stringify(data)
    }

    increaseAlbums() {
        this.numberOfAlbums = this.numberOfAlbums + 1
        if (this.numberOfAlbums > 0) {
            this.albumMessage = Messages.YEA_WE_HAVE_ALBUMS
        }
    }

    showOrHide() {
        this.showAlbums = !this.showAlbums
    }
}

