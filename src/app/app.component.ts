import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // <app-root><app-root/>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'this is HEADER!!!!';
    public numberOfAlbums: number

    constructor() {
        this.numberOfAlbums = 0;
    }

    increaseAlbums() {
        this.numberOfAlbums = this.numberOfAlbums + 1
    }
}
