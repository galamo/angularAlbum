import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent {
    public imageURL: string
    public showImage: boolean
    constructor() {
        this.showImage = true;
        this.imageURL = "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg"
    }
}

