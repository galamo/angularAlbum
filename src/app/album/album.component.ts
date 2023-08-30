import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
    @Input() item: any
    @Output() orderEvent = new EventEmitter<any>()
    public showImages: boolean
    constructor() {
        this.showImages = false;
    }
    ngOnInit(): void {
        // call server!
        console.log(this.item)
    }
    order() {
        console.log("order...")
        this.orderEvent.emit(this.item)
    }
    toggleImages() {
        this.showImages = !this.showImages
    }
    ngOnDestroy(): void {

    }


}

