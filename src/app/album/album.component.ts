import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
    @Input() item: any
    public showImages: boolean
    constructor() {
        this.showImages = false;
    }
    ngOnInit(): void {
        // call server!
        console.log(this.item)
    }

    ngOnDestroy(): void {

    }


}

