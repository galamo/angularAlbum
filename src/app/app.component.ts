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
    public numberOfOrders: number = 0;
    public orders: Array<any>;

    constructor() {
        this.numberOfAlbums = 0;
        this.albumMessage = Messages.NO_ALBUMS
        this.orders = []
        const data = [
            {
                name: "Critim", description: "Tomer is traveling to Critim with her frineds from army",
                pictures: ["https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg"]
            },
            { name: "London", description: "Rafi having fun in London", pictures: ["https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg"] },
            { name: "Amsterdam", description: "Snir is enjoyint in Amsterdam, Yuval also joint", pictures: ["https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg", "https://www.travelandleisure.com/thmb/1aFt6rEb0a9snnKSaoVVQ7Je2UY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/itinerary_05-5905cbf35f9b5810dca7a477.jpg"] }]
        this.albums = data;
        this.albumsStrings = JSON.stringify(data)
    }

    increaseAlbums() {
        this.numberOfAlbums = this.numberOfAlbums + 1
        if (this.numberOfAlbums > 0) {
            this.albumMessage = Messages.YEA_WE_HAVE_ALBUMS
        }
    }
    addOrder(item: any) {
        console.log(item)
        this.orders.push(item)
    }
    showOrHide() {
        this.showAlbums = !this.showAlbums
    }
}

