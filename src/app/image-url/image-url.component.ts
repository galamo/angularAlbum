import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-image-url',
    templateUrl: './image-url.component.html',
    styleUrls: ['./image-url.component.css']
})
export class ImageUrlComponent implements OnInit {
    @Input() currentImage: string = ""
    constructor() { }

    ngOnInit(): void {
    }

}
